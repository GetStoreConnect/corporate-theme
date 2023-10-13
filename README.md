# Corporate Theme

This is a multi-purpose theme, ideal for corporate, B2B, or services companies.

## Directory Structure

This theme follows a particular folder organization. While some folders may not contain any files, they must still need to remain within the theme structure.

Also, it has been developed using the [Base Theme](https://github.com/GetStoreConnect/base-theme) as a boilerplate. The Corporate theme doesn't contain all the base theme structure, instead, we only include those customised, modified and new templates, snippets, variables or translations. Feel free to create a brand new theme using the base theme or this one.

## Theme Installer

The theme installer is in your Salesforce org, where you must upload this theme as a zip file. Before uploading, remove the .git directory and README.md file from this repo. The theme installer displays errors if it does not find the standard directory structure.

## New Templates

You can create new templates as long as they reside within the standard directory structure.

## Features

- Full width and height hero banners
- Minimalistic header
- Animated image with content overlay
- Featured products and categories slider
- Featured articles cards
- Improved container layout 100% responsive
- Page top banners
- Corporate footer style

### New Content Block

- hero

### Modified Content Blocks

- container
- featured_articles
- featured_categories
- featured_products

## How to Add Content Blocks to Picklist

You can follow the instructions in this document to [add content blocks to the picklist](https://help.getstoreconnect.com/documentation/adding-templates-to-content-template-picklist.html).

## Configuration

- Ensure that your root directory does not contain any `.git` hidden folders or files
- Compress it to a zip file
- Upload it via the theme importer
- Now, go to the theme template list and remove the `.liquid` on each template
- Rename
  - snippets/products/card/simple_card > snippets/products/simple_card
  - snippets/products/card/card > snippets/products/card
- Preview your theme

### Recommended Help Articles

- StoreConnect [Theme Builder Reference](https://help.getstoreconnect.com/documentation/themes/theme-reference.html)
- StoreConnect [Liquid Reference](https://help.getstoreconnect.com/documentation/liquid/liquid-reference.html)

***Compatible with StoreConnect Liquid 0.11.3 and up**
