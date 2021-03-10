import React from 'react';
import Card from '../components/Card/Card';
import Position from '../components/Position';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Collection from '../components/Collection';
import * as data from '../data/cv.json';
import styles from './cv.module.css';

const CVPage = () => (
  <Layout>
    <div className={styles.container}>
      <Card>
        <section className="hero">
          <div className="name">{data.personal.fullName}</div>
          <div className="position">{data.position}</div>

          <div className="email">e-mail: {data.contact.email}</div>
          <div className="phone">phone: {data.contact.phone}</div>

          <div className="dateOfBirth">
            date of birth: {data.personal.birthDay}
          </div>
          <div className="location">location: {data.contact.address}</div>

          <div className="profile">{data.memo}</div>
        </section>

        <Section title={'Skills'}>
          <Collection items={data.skills} isBold={true} />
        </Section>

        <Section title={'Experience'}>
          {data.experience.map((item, i) => (
            <Position {...item} key={i} />
          ))}
        </Section>

        <Section title={'Languages'}>
          {data.languages.map((lang, i) => (
            <div key={i}>
              {lang.name} - {lang.level}
            </div>
          ))}
        </Section>

        <Section title={'Interests'}>
          <Collection items={data.interests} />
        </Section>
      </Card>
    </div>
  </Layout>
);

export default CVPage;
