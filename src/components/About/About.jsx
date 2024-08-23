import React from 'react';
import styles from './About.module.scss';

const About = () => {
	return (
		<section className={styles.about}>
			<div className={`${styles.about__container} container`}>
				<h2 className={styles.about__title}>About Us</h2>
				<div className={styles.about__body}>
					<img className={styles.about__img} src='./image/about.png' />
					<div className={styles.about__info}>
						<p className={styles.about__description}>
							The model offers a framework for discussing problems related to
							the user's experience, as well as possible ways and means of
							solving them. Application development begins at the top level
							(strategy), where the future software product is described quite
							abstractly from the point of view of the expectations of both
							users and the customer.
						</p>
						<ul className={`${styles.about__list} ${styles['about-list']}`}>
							<li className={styles['about-list__item']}>
								<h3 className={styles['about-list__title']}>800</h3>
								<p className={styles['about-list__text']}>Pupils</p>
							</li>
							<li className={styles['about-list__item']}>
								<h3 className={styles['about-list__title']}>18</h3>
								<p className={styles['about-list__text']}>Teachers</p>
							</li>
							<li className={styles['about-list__item']}>
								<h3 className={styles['about-list__title']}>6</h3>
								<p className={styles['about-list__text']}>Foreign languages</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
