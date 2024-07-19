# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.0.3] - 2024-07-19

### Changed
- Updated the README with app details 
- Updated the changelog with barcode generator changes

## [0.0.2] - 2024-07-19

### Changed
- Updated the barcode service to return the image of barcode instead of the buffer.
- Updated the vendor
- Updated the barcode enpoint route

### Removed 
- Removed custom Client getter status.
- Removed the status.ts file which has defined some methods.
- Removed jsbarcode library.

## [0.0.1] - 2024-07-18

### Added

- Initial service-example(https://github.com/vtex-apps/service-example) from vtex
- Added service to generate barcode

### Changed
- Updated the validate function to validate based on the orderId
- Updated the endpoint path and service attributes in service.json.
- Updated the README.
- Updated the manifest.json file

### Removed
- Removed status.ts file, which was the logic from the default app code.

