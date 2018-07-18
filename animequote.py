#!/usr/bin/env python3

# NOTE: You do not need to run this file if you already have the quotes of your
# anime character
from selenium import webdriver
import json

# For checking if the file exists or not
try:
    with open('megumin-quotes.json', 'r') as outfile:
        print('You already have the quotes!')
except:
    # Change the path below to wherever your webdriver is located
    # For me, I use chrome, and I got my webdriver from here: https://www.seleniumhq.org/download/
    browser = webdriver.Chrome(
        "C:/Users/Super/Downloads/chromedriver_win32/chromedriver.exe")
    page = 0
    elem = []
    jsonQuote = {}
    # Since the quotes are located in multiple pages, I have a function that I can call again if there are more quotes

    browser.get(
        'https://www.animecharactersdatabase.com/animequotes.php?x=' + str(page) + '&cid=75490')

    def getQuote():
        # NOTE: go to the website, find you character, and replace the cid, you can
        # find the cid by looking at the url of the list of quotes by your character
        # I change x value because through some experimentation, I figured out that
        # the only difference between the pages with quotes by the same character
        # is by a multiple of 30 for the x variable in the url
        browser.get(
            'https://www.animecharactersdatabase.com/animequotes.php?x=' + str(page) + '&cid=75490')

        for x in browser.find_elements_by_xpath(
                "//div[@style='font-size: 1.5em; background: #ffc655; color: #2a60b2; padding: 5px 5px; ']"):
            elem.append(x.text)

    # Since the quotes are spready out across multiple pages, I check if a quote
    # exists before calling the function that adds them to the elem list
    while browser.find_elements_by_xpath("//div[@style='font-size: 1.5em; background: #ffc655; color: #2a60b2; padding: 5px 5px; ']"):
        getQuote()
        page += 30

    # Shoving everything into a dictionary that I can put into a json file.
    for x, y in enumerate(elem):
        jsonQuote[x] = y

    # Actually shoving everything into a json file
    with open('megumin-quotes.json', 'w') as outfile:
        json.dump(jsonQuote, outfile)
