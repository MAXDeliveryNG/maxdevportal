TITLE='*Azure Deploy Log for*'
EVENT='Deployed to Production'
LOG_RAW=$(awk '{printf "%s\\n", $0}' <${1})
LOG_TEXT=${LOG_RAW//\"/\'} # Replace all " with '
COLOR='3AA3E3'
THUMB_IMG_URL=''

if [[ $(git rev-parse --abbrev-ref HEAD) == 'staging' ]]; then
  EVENT='Deployed to Staging'
fi

curl {$SLACK_URL} -X POST \
-H 'Content-type: application/json' \
-d @- << EOF
{
  "attachments": [
    {
      "fallback": "Required plain-text summary of the attachment.",
      "color": "#${COLOR}",
      "pretext": "${TITLE} -- <${CIRCLE_COMPARE_URL}|$(git log -1 --pretty=%B)>",
      "author_name": "MAX Analytics Server",
      "title": "CircleCI Build ${CIRCLE_BUILD_NUM}",
      "title_link": "${CIRCLE_BUILD_URL}",
      "text": "\`\`\`${LOG_TEXT}\`\`\`",
      "fields": [
        {
          "title": "Author",
          "value": "<https://githib.com/${CIRCLE_USERNAME}|${CIRCLE_USERNAME}>",
          "short": true
        },
        {
          "title": "Event",
          "value": "${EVENT}",
          "short": true
        }
      ],
      "thumb_url": "${THUMB_IMG_URL}",
      "footer": "MAX DevOps",
      "footer_icon": "${MAX_LOGO_URL}",
      "ts": "$(date +%s)",
      "mrkdwn_in": [
        "text",
        "pretext"
      ]
    }
  ]
}
EOF