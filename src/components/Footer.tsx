function Footer() {
  return (
    <footer className="site-footer" id="lien-he">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <a className="site-brand site-brand--footer" href="#trang-chu">
              <span className="site-brand__mark" aria-hidden="true">
                <svg viewBox="0 0 40 40" focusable="false">
                  <path d="M29.5 9.5c-10.3.2-17.8 4.7-18.2 12.1-.2 4.4 2.8 7.4 7 7.2 7.5-.3 11.1-9.4 11.2-19.3Z" />
                  <path d="M12.5 31c3.4-5.8 7.8-10.2 13.2-13.6" />
                </svg>
              </span>
              <span className="site-brand__name">
                An Nhiên <span>Restaurant</span>
              </span>
            </a>
            <p>
              Món ngon lành, phút giây an yên. Hẹn gặp bạn tại An Nhiên.
            </p>
          </div>

          <div className="site-footer__details">
            <h2>Liên hệ</h2>
            <p>123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</p>
            <a href="tel:+84123456789">0123 456 789</a>
            <a href="mailto:hello@annhien.example">
              hello@annhien.example (email mẫu)
            </a>
          </div>

          <div className="site-footer__details">
            <h2>Giờ mở cửa</h2>
            <p>Thứ Hai – Chủ Nhật</p>
            <p>10:00 – 22:00</p>
          </div>

          <div className="site-footer__details">
            <h2>Theo dõi chúng tôi</h2>
            <p className="site-footer__social-placeholder">
              Facebook và Instagram: thông tin mẫu, đang cập nhật.
            </p>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© An Nhiên Restaurant. Bảo lưu mọi quyền.</p>
          <p>Thông tin trên website là dữ liệu giới thiệu mẫu.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
