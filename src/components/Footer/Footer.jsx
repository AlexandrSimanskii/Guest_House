const Footer = () => {
  return (
    <footer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9221.556982015009!2d20.51332133985603!3d54.70277462997581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e316145852452b%3A0xcff7eaaca8ae2b46!2z0YPQuy4g0J7QutGC0Y_QsdGA0YzRgdC60LDRjywgNtCQ!5e0!3m2!1sru!2suk!4v1696629907089!5m2!1sru!2suk"
        width="245"
        height="173"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        <div className="footer-contact"></div>
        <div className="footer-inform"></div>
        <div className="footer-weather"><a target="_blank" rel="noreferrer" href="https://nochi.com/weather/kaliningrad-16026"><img src="https://w.bookcdn.com/weather/picture/12_16026_1_20_2071C9_118_2071C9_FFFFFF_FFFFFF_0_2071C9_FFFFFF_0_6.png?scode=65370&domid=589&anc_id=38465" alt="booked.net"/></a></div>
    </footer>
  
  );
};

export default Footer;
