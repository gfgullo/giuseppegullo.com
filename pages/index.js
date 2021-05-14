import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { place, strings } from '../components/strings'
import {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Project from './project';
import Slider from "react-slick";
import IconButton from '@material-ui/core/IconButton';
import { loadCSS } from 'fg-loadcss';


export default function Home() {

  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sendMail = ()=>{
    let mail = 'giuseppe@profession.ai'
    let subject = 'Hey Giuseppe !'
    let url = 'mailto:'+mail+'?SUBJECT='+subject
    window.open(url, '_blank')
  }

  const goToUrl = (url)=>{
    console.log("url")
    window.open(url, '_blank')
  }

  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
});

  return (
    <div className={styles.container}>

      <Head>
        <title>Giuseppe Gullo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <main className={styles.main}>


        <div className={styles.hero}>
          <div className={styles.heroTitle}>
            <h2>{strings.heroTitle}</h2>
            <h4>{strings.heroSubtitle}</h4>
          </div>
        </div>


        <div className={styles.whoiam}>
          <h1>{strings.who.title}</h1>
          <p>{place("who", "content")}</p>
        </div>


        <div className={styles.projects}>
          <h4 style={{ color: grey[100] }}>{strings.projects.title}</h4>
          <p style={{ color: grey[100], fontSize: '24px' }}>{strings.projects.subtitle}</p>
          <Grid container spacing={2} style={{ marginTop: '50px' }}>
            <Grid item md><Project name={strings.avada.name} img='avada.jpg' desc={place("avada", "desc")} status="test" /></Grid>
            <Grid item md><Project name={strings.shapeapp.name} img='shapeapp.jpg' desc={place("shapeapp", "desc")} status="test" /></Grid>
            <Grid item md><Project name={strings.hicoach.name} img='coachbot.jpg' desc={place("hicoach", "desc")} status="test" /></Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: '16px' }}>
            <Grid item md><Project name={strings.hifit.name} img='hifit.jpg' desc={strings.hifit.desc} status="download" link="https://www.amazon.com/Amanity-HiFit-Home-Workouts/dp/B06XQMFVHQ" /></Grid>
            <Grid item md><Project name={strings.owlspot.name} img='owlspot.jpg' desc={strings.owlspot.desc} status="test" /></Grid>
            <Grid item md><Project name={strings.brainvsbrain.name} img='brainvsbrain.jpg' desc={strings.brainvsbrain.desc} status="test" link="https://xd.adobe.com/view/385a2c37-d180-4b63-4ae1-e8acba8fc40d-4e6b/" /></Grid>
          </Grid>
        </div>

        <div className={styles.goals}>
          <h4>{strings.goals.title}</h4>
          <p>{place("goals", "content")}</p>
        </div>

        <div className={styles.testimonials}>
          <h4>Hanno parlato di me</h4>
          <p style={{ marginBottom: "30px" }}>(o di qualcosa che ho fatto)</p>
          <Slider {...settings}>
            <div><img src="/images/testimonials/la_sicilia.png" /></div>
            <div><img src="/images/testimonials/economyup.png" /></div>
            <div><img src="/images/testimonials/pcmag.png" /></div>
            <div><img src="/images/testimonials/cnet.png" /></div>
            <div><img src="/images/testimonials/tomshw.png" /></div>
            <div><img src="/images/testimonials/tuttoandroid.png" /></div>
            <div><img src="/images/testimonials/androidauthority.png" /></div>
          </Slider>
        </div>



        <Grid container>
              <Grid item xs style={{backgroundImage: 'url(/images/pics/pic_1.jpg)', boxShadow: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)", backgroundSize:'cover', backgroundRepeat:'no-repeat',textAlign:'center'}}>
                <div className={styles.ctaBox}>
                  <h3 variant="h3" style={{color:grey[100]}}>{strings.contact}</h3>
                  <IconButton aria-label="email" onClick={sendMail}>
                    <Icon className='fa fa-envelope' color='secondary'/>
                  </IconButton>
                </div>
              </Grid>
              <Grid item xs style={{backgroundImage: 'url(/images/pics/pic_2.png)', boxShadow: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)", backgroundSize:'cover', backgroundRepeat:'no-repeat',textAlign:'center'}}>
                <div className={styles.ctaBox}>
                  <h3 style={{color:grey[100]}}>{strings.follow}</h3>
                  <IconButton aria-label="facebook" onClick={goToUrl.bind(this,'http://fb.me/gfgullo')}>
                    <Icon className='fab fa-facebook' color='secondary' />
                  </IconButton>
                  <IconButton aria-label="instagram" onClick={goToUrl.bind(this,'https://www.instagram.com/gfgullo/')}>
                    <Icon className='fab fa-instagram' color='secondary' />
                  </IconButton>
                  <IconButton aria-label="youtube" onClick={goToUrl.bind(this,'https://www.youtube.com/channel/UCDSGI7LWmEiLv5PzZkp1Sag')}>
                    <Icon className='fab fa-youtube' color='secondary' />
                  </IconButton>
                </div>
              </Grid>
            </Grid>


      </main>

      <footer className={styles.footer}>
          <h1 style={{color:grey[100]}}>{strings.footer.title}</h1>
          <p style={{color:grey[100]}}>{strings.footer.content}</p>
      </footer>
    </div>
  )
}
