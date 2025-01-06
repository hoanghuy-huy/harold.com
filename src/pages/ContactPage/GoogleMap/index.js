import React from 'react';

const GoogleMap = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.3581582190823!2d106.62142077486877!3d10.7068335894377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752dff5aa47daf%3A0xe14177e28117ed4b!2zRHJlYW0gSG9tZSBQYWxhY2UsIFBoxrDhu51uZyA3LCBRdeG6rW4gOCwgSOG7kyBDaMOtIE1pbmggNzAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1735995563787!5m2!1sen!2s"
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
