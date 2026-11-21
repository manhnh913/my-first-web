import { restaurantProfile } from '../data/restaurantData'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <a className="site-brand site-brand--footer" href="#trang-chu">
              <span className="site-brand__name">
                {restaurantProfile.name} <span>{restaurantProfile.descriptor}</span>
              </span>
            </a>
            <p>Restaurant &amp; Cafe tại Hà Nội.</p>
          </div>

          <div className="site-footer__details">
            <h2>Địa chỉ</h2>
            <p>{restaurantProfile.address}</p>
            <a href={restaurantProfile.mapsUrl} target="_blank" rel="noreferrer">
              Xem bản đồ <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="site-footer__details">
            <h2>Đặt bàn</h2>
            <a href={`tel:${restaurantProfile.hotlineTel}`}>
              {restaurantProfile.hotline}
            </a>
            <p>Gọi để xác nhận giờ phục vụ và tình trạng bàn.</p>
          </div>

          <div className="site-footer__details">
            <h2>Khám phá</h2>
            <a href="#ve-chung-toi">Giới thiệu</a>
            <a href="#thuc-don">Thực đơn</a>
            <a href="#khong-gian">Không gian</a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {currentYear} {restaurantProfile.fullName}.</p>
          <p>Biểu mẫu đặt bàn chưa gửi dữ liệu đến nhà hàng.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
