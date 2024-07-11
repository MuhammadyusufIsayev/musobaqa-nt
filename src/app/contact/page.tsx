'use client'
import contactBanner from '../images/banners/contactBanner.png';
import Image from 'next/image';
import phone from '../images/phone.svg';
import email from '../images/email.svg';
import { Card, Typography, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import TextArea from 'antd/es/input/TextArea';

const { Text } = Typography;

const Contact = () => {
    const { handleSubmit, formState: { errors }, control, reset } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);
        reset();
    };

    return (
        <div className='container mx-auto h-[546px] w-[100%] p-[50px] pl-[90px] flex space-between' style={{ backgroundImage: `url(${contactBanner.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '40px' }}>
            <div className='space-y-[170px] w-[100%]'>
                <div>
                    <h1 className='text-[#0D0D0D] text-[48px] font-bold'>Contact Us</h1>
                    <p className='text-[#70737C] text-[16px] font-medium w-[249px]'>Send for us your request and we will get in touch with you as soon as possible</p>
                </div>
                <div>
                    <div className='flex items-center'>
                        <Image src={phone} alt="phone" width={64} height={64} />
                        <p className='text-[#0D0D0D] text-[16px] font-medium ml-[10px]'>+998 33 068 47 68</p>
                    </div>
                    <div className='flex items-center'>
                        <Image src={email} alt="email" width={64} height={64} />
                        <p className='text-[#0D0D0D] text-[16px] font-medium ml-[10px]'>toyirovmirvohid@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="m">
                <Card className="card w-[536px] h-[100%] rounded-[29px]"  hoverable >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-4">
                            <div>
                                <p>Name</p>
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{ required: "Name is required" }}
                                    render={({ field }) => <Input style={{ width: '100%', height: '56px' }} placeholder="Name" {...field} className={errors.name ? "input-error" : ""} />}
                                />
                                {errors.name && <Text style={{ color: 'red' }}>{errors.name?.message?.toString()}</Text>}
                            </div>
                            <div>
                                <p>Email</p>
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{ required: "Email is required" }}
                                    render={({ field }) => <Input style={{ width: '100%', height: '56px' }} placeholder="Email Address" {...field} className={errors.email ? "input-error" : ""} />}
                                />
                                {errors.email && <Text style={{ color: 'red' }}>{errors.email?.message?.toString()}</Text>}
                            </div>
                            <div>
                                <p>Password</p>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{ required: "Password is required" }}
                                    render={({ field }) => <TextArea style={{ width: '100%', height: '106px' }} placeholder="Password" {...field} className={errors.password ? "input-error" : ""} />}
                                />
                                {errors.password && <Text style={{ color: 'red' }}>{errors.password?.message?.toString()}</Text>}
                            </div>
                            <div className='flex gap-4'>
                                <button type="submit" className="bg-[#359740] text-white w-[100%] h-[56px] rounded-[10px]">Submit</button>
                                <p className='w-[222px]'>By sending request you agree to out Pivacy&Policy</p>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default Contact;
