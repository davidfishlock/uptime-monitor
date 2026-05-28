import mongoose, { Schema, Model } from 'mongoose'

export interface CronLockDoc {
  _id: string
  acquiredAt: Date
  expiresAt: Date
}

const CronLockSchema = new Schema<CronLockDoc>(
  {
    _id: { type: String, required: true },
    acquiredAt: { type: Date, required: true },
    expiresAt: { type: Date, required: true },
  },
  { _id: false, versionKey: false }
)

CronLockSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })

const CronLockModel: Model<CronLockDoc> =
  mongoose.models.CronLock || mongoose.model<CronLockDoc>('CronLock', CronLockSchema)

export default CronLockModel
