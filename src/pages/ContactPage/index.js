import React from 'react';
import './ContactPage.scss';
import { Button, Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import GoogleMap from './GoogleMap';
const ContactPage = () => {
    return (
        <>
            <section className="contact-page section">
                <div className="container">
                    <div className="contentLeft">
                        <h1>Liên hệ</h1>
                        <h2>Công Ty TNHH Harold</h2>
                        <div className="desc">
                            <p>
                                {' '}
                                <strong>Địa chỉ:</strong> 4E Cư Xá Đồng Tiến,
                                phường 14, Quận 10 , TP. HCM
                            </p>
                            <p>
                                <strong>Nhà máy:</strong> 160A12 khu phố 2,
                                phường Phú Tân, TP.Bến Tre
                            </p>
                            <p>
                                <strong>Hotline: </strong>
                                <a href="tel:0989166612">0989.166.612</a>–{' '}
                                <a href="tel:0946544904">0946.544.904</a>
                            </p>

                            <p>
                                <strong>Email: </strong>
                                <a href="mailto:giacongunila@gmail.com">
                                    giacongunila@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="contentRight">
                        <div className="content">
                            <h3>Vui lòng để lại thông tin để nhận TƯ VẤN</h3>
                            <div className="row">
                                <div className="form-group col-6">
                                    <Input placeholder="Họ và tên" />
                                </div>
                                <div className="form-group col-6">
                                    <Input placeholder="Số điện thoại" />
                                </div>
                                <div className="form-group col-6">
                                    <Input placeholder="Email" />
                                </div>
                                <div className="form-group col-6">
                                    <Input placeholder="Tiêu đề" />
                                </div>
                                <div className="form-group col-12">
                                    <Input placeholder="Vấn đề cần tư vấn" />
                                </div>
                                <div className="col-12 form-group">
                                    <Button
                                        variant="outline"
                                        endIcon={<SendIcon />}
                                    >
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='location'>
                <GoogleMap />
            </div>
        </>
    );
};

export default ContactPage;
