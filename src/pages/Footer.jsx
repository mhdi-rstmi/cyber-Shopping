import React from 'react';
import { logoFooter } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTiktok, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


const iconComponentMap = {
    FaFacebookF: FaFacebookF,
    FaTiktok: FaTiktok,
    FaTwitter: FaTwitter,
    RiInstagramFill: RiInstagramFill
};

const Footer = () => {
    return (
        <section className=' py-[104px] bg-black xl:px-40 lg:px-32 md:px-20 px-4 max-md:flex max-md:flex-col max-md:items-center '>
            <div className=' md:flex max-md:text-center max-md:flex max-md:flex-col max-md:items-center '>
                <div className='grow max-md:contents'>
                    <img src={logoFooter} alt="Logo" />
                    <p className='text-sm text-[#cfcfcf] mt-6'>We are a residential interior design firm located in Portland. Our <br />boutique-studio offers more than</p>
                </div>
                {
                    footerLinks.map((footerLink, index) => (
                        <div key={index} className='max-md:mt-8 grow'>
                            <h2 className='text-white font-semibold text-base mb-3'>{footerLink.title}</h2>
                            {
                                footerLink.links.map((link, index) => (
                                    <p key={index} className='text-[#cfcfcf] my-3 text-sm'>{link}</p>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div className='flex max-md:mt-8 mt-6 w-[173px] '>
                {
                    socialMedia.map((social) => {
                        const IconComponent = iconComponentMap[social.icon];
                        return (
                            <Link to={social.link} key={social.id} className='grow'>
                                <IconComponent className="text-white w-6 h-6" />
                            </Link>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Footer;
