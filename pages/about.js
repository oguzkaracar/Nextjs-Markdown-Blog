import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <div className="main-content">
        <h1>About Me</h1>
        <p>
          Merhabalar ben Oğuzhan Karaçar. 25 yaşındayım. Ankara'da yaşıyorum. 1
          yıldır frontend development ile ilgileniyorum. Uzun yıllar bireysel
          olarak ve kendi işlerimde kullanmak üzere web teknolojileri ile
          ilgilendikten sonra tam zamanlı çalışmaya, ve kariyerime bu alanda
          devam etmeye karar verdim. Genellikle sektörü takip etmeye ve güncel
          teknolojiler kullanmaya çalışıyorum. Beni daha yakından tanımak için
          aşağıdaki sosyal medya hesaplarıma göz atabilirsiniz.
        </p>
        <p> Sosyal medya hesaplarım:</p>
        <ul>
          <li>
            <a
              href="https://github.com/oguzkaracar"
              target="_blank"
              rel="noopener noreferrer"
              className="post-item-link">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/oguzhan-karacar"
              target="_blank"
              rel="noopener noreferrer"
              className="post-item-link">
              Codepen
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/oguzhan-karacar/"
              target="_blank"
              rel="noopener noreferrer"
              className="post-item-link">
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/oguzhankaracar"
              target="_blank"
              rel="noopener noreferrer"
              className="post-item-link">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/oguzhnkrcr/"
              target="_blank"
              rel="noopener noreferrer"
              className="post-item-link">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default About;
