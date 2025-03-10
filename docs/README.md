# Barcode Generation App

This application processes an orderId as a URL parameter and dynamically generates a corresponding barcode.

## Usage
### 1. Start your VTEX development server:
`vtex link`

### 2. Access the barcode generator endpoint:
`https://{workspace}--{account}.myvtex.com/_v/barcode/generate/:orderId`

- account should be replaced with account name.
- Add the workspace name in which the app is linked.
- And orderId with the order ID for which you want to generate a barcode.

### 3. The endpoint will respond with a PNG image containing the barcode.
![Generated Barcode](image.png)
