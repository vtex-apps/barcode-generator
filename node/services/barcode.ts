import * as bwipjs from 'bwip-js'

export const generateBarcode = async (orderId: string) => {
  const res = await bwipjs
    .toBuffer({
      bcid: 'code128', // Barcode type
      text: orderId, // Text to encode
      scale: 3, // 3x scaling factor
      height: 10, // Bar height, in millimeters
      includetext: true, // Show human-readable text
      textxalign: 'center', // Always good to set this
    })
    .then((png) => {
      // `png` is a Buffer as in the example above
      return { data: png, isError: false }
    })
    .catch((err) => {
      // `err` may be a string or Error object
      return { data: err?.response?.data ?? err, isError: true }
    })

  return res
}
