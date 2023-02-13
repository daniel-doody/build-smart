# 1) convert user input location to x/y coordinates

import geopy
from geopy.geocoders import Nominatim

def address_to_coordinates(address):
    geolocator = Nominatim(user_agent="geoapiExercises")
    location = geolocator.geocode(address)
    return location.latitude, location.longitude

def main(address):
    lat, lon = address_to_coordinates(address)
    print("The coordinates of the address are: latitude = {}, longitude = {}".format(lat, lon))

if __name__ == '__main__':
    address = input("Enter the address: ")
    main(address)

# 2) plugin coordinates to ArcGIS map

from arcgis.gis import GIS
gis = GIS()
map = gis.map("Los Angeles, CA")

# Prompt the user for the starting point coordinates
latitude = input("Enter the latitude: ")
longitude = input("Enter the longitude: ")

# Set the starting point of the map to the user-defined coordinates
map.set_center(float(latitude), float(longitude))