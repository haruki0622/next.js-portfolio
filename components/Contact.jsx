import React from 'react';
import SectionTitle from './text/SectionTitle';
import SectionText from './text/SectionText';
import ContactItem from './ContactItem';

const Contact = () => {
  return (
    <section className='max-w-[370px] px-7 mx-auto  md:max-w-[750px]'>
      <SectionTitle>お問い合わせ</SectionTitle>
      <SectionText>
        Twitterかメールでお問い合わせ下さい。 メッセージをお待ちしています！
      </SectionText>
      <div className='grid grid-cols-1 gap-14 md:grid-cols-2'>
        <ContactItem
          title='メール'
          src='/mail.jpg'
          description='内容を確認し、 24時間以内に返信します。'
          linkText='メールを送信する'
          href="mailto:izu.0622h@gmail.com"
        />
        <ContactItem
          title='Twitter'
          src='/twitter.jpg'
          description='内容を確認し、 3時間以内に返信します。'
          linkText='DMを送信する'
          href="https://twitter.com/haruharu_0622x"
        />
      </div>
    </section>
  );
};

export default Contact;
