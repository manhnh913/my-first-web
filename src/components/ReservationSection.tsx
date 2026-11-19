import { useState } from 'react'
import type { FormEvent } from 'react'

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
  } else if (values.time < '10:00' || values.time > '22:00') {
    errors.time = 'Nhà hàng nhận đặt bàn từ 10:00 đến 22:00.'
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
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const minimumDate = getLocalDateValue()
  const errors = validateBooking(values, minimumDate)

  function updateField(field: BookingField, value: string) {
    setValues((currentValues) => ({ ...currentValues, [field]: value }))
    setBookingSuccess(false)
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
    setBookingSuccess(false)

    const invalidField = (
      ['fullName', 'phone', 'email', 'date', 'time', 'guests'] as const
    ).find((field) => errors[field])

    if (invalidField) {
      document.getElementById(`booking-${invalidField}`)?.focus()
      return
    }

    setSubmitted(false)
    setTouched({})
    setBookingSuccess(true)
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
      id="dat-ban"
      aria-labelledby="reservation-title"
    >
      <div className="container reservation-section__layout">
        <div className="reservation-section__intro">
          <p className="eyebrow">MỘT CHỖ NGỒI ĐANG CHỜ BẠN</p>
          <h2 id="reservation-title">Đặt bàn ngay hôm nay</h2>
          <p>
            Dành cho mình một khoảng thời gian thật ngon lành tại An Nhiên. Hãy
            gửi thông tin để chúng tôi chuẩn bị đón bạn.
          </p>

          <div className="reservation-section__contact">
            <a className="reservation-phone" href="tel:+84123456789">
              0123 456 789
            </a>
            <span>123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
            <a href="mailto:hello@annhien.example">
              hello@annhien.example (email mẫu)
            </a>
          </div>
        </div>

        <form className="booking-form" noValidate onSubmit={handleSubmit}>
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
              <label htmlFor="booking-time">Giờ đặt bàn * <span>(10:00–22:00)</span></label>
              <input
                id="booking-time"
                name="time"
                type="time"
                min="10:00"
                max="22:00"
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
              Đây là biểu mẫu demo frontend. Thông tin chưa được gửi hoặc lưu; vui
              lòng gọi nhà hàng để xác nhận đặt bàn.
            </p>
            <button className="button button--primary booking-form__submit" type="submit">
              Gửi yêu cầu đặt bàn
            </button>
          </div>

          {bookingSuccess && (
            <p className="booking-form__success" role="status" aria-live="polite">
              Cảm ơn {values.fullName.trim()}! Yêu cầu demo đã được ghi nhận trên
              màn hình, chưa được gửi đến nhà hàng. Vui lòng gọi 0123 456 789 để
              xác nhận.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ReservationSection
