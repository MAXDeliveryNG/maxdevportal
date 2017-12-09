export module GeoUtils {

    export function toLatLngObject(coordinates: string) {
        const components = coordinates.split(',');
        return {
            lat: Number(components[0]),
            lng: Number(components[1])
        }
    }
}