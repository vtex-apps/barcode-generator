import { generateBarcode } from '../services/barcode'

export async function barcode(ctx: Context, next: () => Promise<any>) {
  const {
    state: { orderId },
  } = ctx

  const generatedBarcodeBuffer = await generateBarcode(orderId)

  ctx.status = 200
  if (generatedBarcodeBuffer) ctx.type = 'image/png'
  ctx.body = generatedBarcodeBuffer.isError
    ? generatedBarcodeBuffer
    : generatedBarcodeBuffer.data
  await next()
}
