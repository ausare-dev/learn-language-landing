import React from 'react';
import styles from './Pricing.module.scss';

const Pricing = () => {
	return (
		<section className={styles.pricing}>
			<div className={`${styles.pricing__container} container`}>
				<h2 className={styles.pricing__title}>Pricing</h2>
				<ul className={`${styles.pricing__list} ${styles['pricing-list']}`}>
					<li className={styles['pricing-list__item']}>
						<img
							src='./image/pricing1.png'
							className={styles['pricing-list__img']}
						/>
						<h3 className={styles['pricing-list__title']}>
							Self-study online course
						</h3>
						<p className={styles['pricing-list__text']}>
							Start learning English online in live classes with qualified EC
							teachers and students from all over the world.
						</p>
						<div
							className={`${styles['pricing-list__price-card']} ${styles['price-card']}`}
						>
							<p className={styles['price-card__price']}>£5.99</p>
							<p className={styles['price-card__length']}>per month</p>
						</div>
					</li>
					<li className={styles['pricing-list__item']}>
						<img
							src='./image/pricing2.png'
							className={styles['pricing-list__img']}
						/>
						<h3
							className={`${styles['pricing-list__title']} ${styles['pricing-list__title--two']}`}
						>
							Live online classes
						</h3>
						<p
							className={`${styles['pricing-list__text']} ${styles['pricing-list__text--two']}`}
						>
							Interactive group classes with expert teachers. Free 7-day trial
						</p>
						<div
							className={`${styles['pricing-list__price-card']} ${styles['price-card']}`}
						>
							<p className={styles['price-card__price']}>£12.99</p>
							<p className={styles['price-card__length']}>per month</p>
						</div>
					</li>
					<li className={styles['pricing-list__item']}>
						<img
							src='./image/pricing3.png'
							className={styles['pricing-list__img']}
						/>
						<h3
							className={`${styles['pricing-list__title']} ${styles['pricing-list__title--three']}`}
						>
							Personal Tuition
						</h3>
						<p
							className={`${styles['pricing-list__text']} ${styles['pricing-list__text--three']}`}
						>
							Online one-to-one English tutoring – enjoy our first session for
							only $1
						</p>
						<div
							className={`${styles['pricing-list__price-card']} ${styles['price-card']}`}
						>
							<p className={styles['price-card__price']}>£20.99</p>
							<p className={styles['price-card__length']}>per month</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Pricing;
