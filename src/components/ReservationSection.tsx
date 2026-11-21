import { useState } from 'react'
import type { FormEvent } from 'react'
import { restaurantProfile } from '../data/restaurantData'

type BookingValues = {
  fullName: string
  phone: string
  email: string
  date: string
  time: string
  guests: string
  notes: string
}

type BookingField = keyof BookingValues
type BookingErrors = Partial<Record<BookingField, string>>

const initialBookingValues: BookingValues = {
  fullName: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  guests: '2',
  notes: '',
}

function getLocalDateValue() {
  const now = new Date()
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60_000)
  return localDate.toISOString().slice(0, 10)
}

function validateBooking(values: BookingValues, minimumDate: string): BookingErrors {
  const errors: BookingErrors = {}
  const phoneDigits = values.phone.replace(/\D/g, '')

  if (!values.fullName.trim()) {
    errors.fullName = 'Vui lòng nhập họ và tên.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Vui lòng nhập số điện thoại.'
  } else if (
    !/^\+?[\d\s().-]+$/.test(values.phone.trim()) ||
    phoneDigits.length < 9 ||
    phoneDigits.length > 15
  ) {
    errors.phone = 'Số điện thoại cần có từ 9 đến 15 chữ số.'
  }

  if (
    values.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
  ) {
    errors.email = 'Vui lòng nhập địa chỉ email hợp lệ.'
  }

  if (!values.date) {
    errors.date = 'Vui lòng chọn ngày đặt bàn.'
  } else if (values.date < minimumDate) {
    errors.date = 'Ngày đặt bàn không thể ở trong quá khứ.'
  }

  if (!values.time) {
    errors.time = 'Vui lòng chọn giờ đặt bàn.'
  } else if (!/^\d{2}:\d{2}$/.test(values.time)) {
    errors.time = 'Vui lòng chọn giờ hợp lệ.'
  }

  if (!values.guests.trim()) {
    errors.guests = 'Vui lòng nhập số người.'
  } else if (
    !/^\d+$/.test(values.guests) ||
    !Number.isSafeInteger(Number(values.guests)) ||
    Number(values.guests) < 1
  ) {
    errors.guests = 'Số người phải là số nguyên hợp lệ lớn hơn 0.'
  }

  return errors
}

function ReservationSection() {
  const [values, setValues] = useState<BookingValues>(initialBookingValues)
  const [touched, setTouched] = useState<Partial<Record<BookingField, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [formChecked, setFormChecked] = useState(false)
  const minimumDate = getLocalDateValue()
  const errors = validateBooking(values, minimumDate)

  function updateField(field: BookingField, value: string) {
    setValues((currentValues) => ({ ...currentValues, [field]: value }))
    setFormChecked(false)
  }

  function markTouched(field: BookingField) {
    setTouched((currentTouched) => ({ ...currentTouched, [field]: true }))
  }

  function getVisibleError(field: BookingField) {
    return submitted || touched[field] ? errors[field] : undefined
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    setFormChecked(false)

    const invalidField = (
      ['fullName', 'phone', 'email', 'date', 'time', 'guests'] as const
    ).find((field) => errors[field])

    if (invalidField) {
      document.getElementById(`booking-${invalidField}`)?.focus()
      return
    }

    setSubmitted(false)
    setTouched({})
    setFormChecked(true)
  }

  const fullNameError = getVisibleError('fullName')
  const phoneError = getVisibleError('phone')
  const emailError = getVisibleError('email')
  const dateError = getVisibleError('date')
  const timeError = getVisibleError('time')
  const guestsError = getVisibleError('guests')

  return (
    <section
      className="reservation-section"
      id="lien-he"
      aria-labelledby="reservation-title"
    >
      <div className="container reservation-section__layout">
        <div className="reservation-section__intro">
          <p className="eyebrow">{restaurantProfile.name} · ĐẶT BÀN</p>
          <h2 id="reservation-title">Liên hệ &amp; đặt bàn</h2>
          <p>
            Liên hệ trực tiếp để xác nhận giờ phục vụ, tình trạng bàn và thông
            tin thực đơn.
          </p>

          <div className="reservation-section__contact">
            <a className="reservation-phone" href={`tel:${restaurantProfile.hotlineTel}`}>
              {restaurantProfile.hotline}
            </a>
            <span>{restaurantProfile.address}</span>
            <span>{restaurantProfile.venue}</span>
            <span>{restaurantProfile.seatingCapacity}</span>
            <a
              className="reservation-map-link"
              href={restaurantProfile.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Xem bản đồ <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <form
          className="booking-form"
          id="dat-ban"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="booking-form__grid">
            <div className="booking-form__field">
              <label htmlFor="booking-fullName">Họ và tên *</label>
              <input
                autoComplete="name"
                id="booking-fullName"
                name="fullName"
                required
                value={values.fullName}
                aria-invalid={Boolean(fullNameError)}
                aria-describedby={fullNameError ? 'booking-fullName-error' : undefined}
                onChange={(event) => updateField('fullName', event.currentTarget.value)}
                onBlur={() => markTouched('fullName')}
              />
              {fullNameError && (
                <p className="booking-form__error" id="booking-fullName-error" role="alert">
                  {fullNameError}
                </p>
              )}
            </div>

            <div className="booking-form__field">
              <label htmlFor="booking-phone">Số điện thoại *</label>
              <input
                autoComplete="tel"
                id="booking-phone"
                name="phone"
                type="tel"
                required
                value={values.phone}
                aria-invalid={Boolean(phoneError)}
                aria-describedby={phoneError ? 'booking-phone-error' : undefined}
                onChange={(event) => updateField('phone', event.currentTarget.value)}
                onBlur={() => markTouched('phone')}
              />
              {phoneError && (
                <p className="booking-form__error" id="booking-phone-error" role="alert">
                  {phoneError}
                </p>
              )}
            </div>

            <div className="booking-form__field">
              <label htmlFor="booking-email">Email (không bắt buộc)</label>
              <input
                autoComplete="email"
                id="booking-email"
                name="email"
                type="email"
                value={values.email}
                aria-invalid={Boolean(emailError)}
                aria-describedby={emailError ? 'booking-email-error' : undefined}
                onChange={(event) => updateField('email', event.currentTarget.value)}
                onBlur={() => markTouched('email')}
              />
              {emailError && (
                <p className="booking-form__error" id="booking-email-error" role="alert">
                  {emailError}
                </p>
              )}
            </div>

            <div className="booking-form__field">
              <label htmlFor="booking-guests">Số người *</label>
              <input
                id="booking-guests"
                name="guests"
                type="number"
                min="1"
                step="1"
                inputMode="numeric"
                required
                value={values.guests}
                aria-invalid={Boolean(guestsError)}
                aria-describedby={guestsError ? 'booking-guests-error' : undefined}
                onChange={(event) => updateField('guests', event.currentTarget.value)}
                onBlur={() => markTouched('guests')}
              />
              {guestsError && (
                <p className="booking-form__error" id="booking-guests-error" role="alert">
                  {guestsError}
                </p>
              )}
            </div>

            <div className="booking-form__field">
              <label htmlFor="booking-date">Ngày đặt bàn *</label>
              <input
                id="booking-date"
                name="date"
                type="date"
                min={minimumDate}
                required
                value={values.date}
                aria-invalid={Boolean(dateError)}
                aria-describedby={dateError ? 'booking-date-error' : undefined}
                onChange={(event) => updateField('date', event.currentTarget.value)}
                onBlur={() => markTouched('date')}
              />
              {dateError && (
                <p className="booking-form__error" id="booking-date-error" role="alert">
                  {dateError}
                </p>
              )}
            </div>

            <div className="booking-form__field">
              <label htmlFor="booking-time">
                Giờ mong muốn *
              </label>
              <input
                id="booking-time"
                name="time"
                type="time"
                required
                value={values.time}
                aria-invalid={Boolean(timeError)}
                aria-describedby={timeError ? 'booking-time-error' : undefined}
                onChange={(event) => updateField('time', event.currentTarget.value)}
                onBlur={() => markTouched('time')}
              />
              {timeError && (
                <p className="booking-form__error" id="booking-time-error" role="alert">
                  {timeError}
                </p>
              )}
            </div>

            <div className="booking-form__field booking-form__field--full">
              <label htmlFor="booking-notes">Ghi chú (không bắt buộc)</label>
              <textarea
                id="booking-notes"
                name="notes"
                rows={3}
                value={values.notes}
                onChange={(event) => updateField('notes', event.currentTarget.value)}
              />
            </div>
          </div>

          <div className="booking-form__actions">
            <p className="booking-form__disclaimer">
              Biểu mẫu chỉ kiểm tra thông tin trên website này; chưa gửi yêu cầu
              đến nhà hàng. Gọi hotline để xác nhận.
            </p>
            <button className="button button--primary booking-form__submit" type="submit">
              Kiểm tra thông tin
            </button>
          </div>

          {formChecked && (
            <p className="booking-form__status" role="status" aria-live="polite">
              Thông tin đã được kiểm tra trên website này nhưng chưa gửi đến nhà
              hàng. Vui lòng gọi {restaurantProfile.hotline} để xác nhận yêu cầu.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ReservationSection
