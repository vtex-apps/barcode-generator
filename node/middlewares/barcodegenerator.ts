/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateBarcode } from '../services/barcode'

export async function barcode(ctx: Context, next: () => Promise<any>) {
  const {
    state: { orderId },
  } = ctx

  const generatedBarcodeBuffer = await generateBarcode(orderId)

  ctx.status = 200
  ctx.body = generatedBarcodeBuffer
  await next()
}
