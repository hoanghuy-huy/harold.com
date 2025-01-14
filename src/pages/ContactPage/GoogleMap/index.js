import React from 'react';

const GoogleMap = () => {
    return (
        <iframe
           src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.106618393153!2d107.81303787488163!3d11.544208988655095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3173f7ada92ff581%3A0xf5aa2fee1251b21a!2zOTEgSMOgIEdpYW5nLCBM4buZYyBTxqFuLCBC4bqjbyBM4buZYywgTMOibSDEkOG7k25nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1736733020181!5m2!1svi!2s'
            width="600"
            height="450"
            style={{ border: 0 }} // Sử dụng đối tượng cho style
            allowFullScreen // Sử dụng camelCase cho thuộc tính
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" // Sử dụng camelCase cho thuộc tính
        ></iframe>
            );
};

export default GoogleMap;
