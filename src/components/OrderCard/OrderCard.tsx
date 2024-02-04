import React, { useEffect, useState } from "react";
import { 
    Card, 
    Typography, 
    Divider,
    Select,
    Form,
    Input,
    FormInstance,
    Button
} from 'antd';
import './OrderCard.css';
import axios from "axios";



interface Area {
    Ref: string,
    AreasCenter: string,
    DescriptionRu: string,
    Description: string
}

interface AreaOption {
    value: string,
    label: string
}

interface VillageOpt {
    label: string,
    value: string
}

interface Village {
    Description: string,
    Ref: string
}

interface DeliveryPoint {
    label: string,
    value: string
}
interface DeliveryPointRes {
    Description: string
}
interface FormValues {
    pib: string,
    email: string,
    phone: number,
    area: string,
    village: string,
    deliveryPoint: string
}
interface Item {
    Image: string,
    Price: number,
    Name: string,
    Desc: string
}
interface OrderCardProps {
    item: Item | null;
    sendEmail: (values: FormValues) => void,
}

const OrderCard: React.FC<OrderCardProps>= ({item, sendEmail}) => {
    const [form] = Form.useForm();
    const [areas, setAreas] = useState<Area[] | []>([])
    const [areaOptions, setareaOptions] = useState<AreaOption[] | []>([])
    const [selectedArea, setSelectedArea] = useState<String | null>()

    const [villages, setvillages] = useState<Village[] | []>([])
    const [villageOpt, setVillageOpt] = useState<VillageOpt[] | []>([])
    const [village, setVillage] = useState('')

    const [deliveryOpt, setDeliveryOpt] = useState<DeliveryPoint[] | []>([])

    useEffect(()=>{
        const getData = async () => {
            const requestData = {
                "apiKey": "",
                "modelName": "Address",
                "calledMethod": "getAreas",
                "methodProperties": {}
            }
            let res = await axios.post('https://api.novaposhta.ua/v2.0/json/', requestData)
            if(res.data.success){
                setAreas(res.data.data)
            }
        }
        getData()
    },[])

    useEffect(() => {
        setareaOptions(areas.map(item => ({ label: item.Description, value: item.Description })));
    }, [areas]);

    const handleArea = async (value: string) => {
        setSelectedArea(value)
        const requestData = {
            "apiKey": "",
            "modelName": "Address",
            "calledMethod": "getCities",
            "methodProperties": {
                "AreaRef": areas.filter(i => i.Description === value)[0].Ref
            }
        }
        const getVillage : any = await axios.post('https://api.novaposhta.ua/v2.0/json/', requestData)
        if(getVillage.data.success){
            const data: Village[] = getVillage.data.data
            setVillageOpt(data.map(i => ({ label: i.Description, value: i.Description })))
            setvillages(data.map(i => ({Description: i.Description, Ref: i.Ref})))
        }
    }
    const handleVillage = async (value: string) => {
        setVillage(value)
        const requestData = {
            "apiKey": "",
            "modelName": "Address",
            "calledMethod": "getWarehouses",
            "methodProperties": {
                "CityRef": villages.filter(i => i.Description === value)[0]?.Ref,
            }
        }
        const res = await axios.post('https://api.novaposhta.ua/v2.0/json/', requestData)
        console.log(res.data)

        if(res.data.success){
            const data : DeliveryPointRes[] = res.data.data
            setDeliveryOpt(data.map(i => ({label: i.Description, value: i.Description})))
        }
    }

    const handleDeliveryPoint = (value : string) => {
        console.log(value)
    }

    const SubmitButton = ({ form }: { form: FormInstance }) => {
        const [submittable, setSubmittable] = React.useState(false);
      
        // Watch all values
        const values = Form.useWatch([], form);
      
        React.useEffect(() => {
          form.validateFields({ validateOnly: true }).then(
            () => {
              setSubmittable(true);
            },
            () => {
              setSubmittable(false);
            },
          );
        }, [values]);
      
        return (
          <Button type="primary" htmlType="submit" disabled={!submittable} style={{width: '100%'}}>
            Оформити замовлення
          </Button>
        );
      };
    
    const onSubmit = (values: FormValues) => {
        console.log(values)
        sendEmail(values)
    }

    return (
        <>
            <Card style={{maxWidth: '400px'}}>
                <Typography.Title level={4} style={{textAlign:'center'}}>Деталі доставки</Typography.Title>
                <Divider />
                <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onSubmit}>
                    <Form.Item name="pib" label="ПІБ" rules={[{ required: true, message: "ПІБ обов'язкове для відправки" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="phone" label="Номер телефону" rules={[{ required: true, message: "Номер обов'язковиц для відправки"  }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ type: 'email', required: false, message: "Невірно вказаний Email"  }]}>
                        <Input />
                    </Form.Item>
                    <div style={{textAlign:'center', width: '100%'}}><img src={'https://upload.wikimedia.org/wikipedia/commons/7/72/Nova_Poshta_2021_logo.png'} height={20} alt="Nova Poshta"/></div>
                    <Divider style={{marginTop: 10, paddingTop: '5px', marginBottom: 10}}/>
                    <Form.Item name="area" rules={[{ required:  true, message: "Оберіть область"  }]}>
                        <Select
                            showSearch
                            style={{ width: '100%' }}
                            placeholder="Оберіть місто..."
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={areaOptions}
                            onChange={handleArea}
                        />
                    </Form.Item>
                    <Form.Item name="village" rules={[{ required:  true, message: "Оберіть населений пункт"  }]}>
                        <Select
                            showSearch
                            style={{ width: '100%'}}
                            placeholder="Оберіть населений пункт..."
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={villageOpt}
                            onChange={handleVillage}
                            disabled={!selectedArea}
                        />
                    </Form.Item>
                    <Form.Item name="deliveryPoint" rules={[{ required:  true, message: "Оберіть відділення"  }]}>
                    <Select
                        showSearch
                        style={{ width: '100%'}}
                        placeholder="Оберіть відділення..."
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').toLocaleLowerCase().includes(input.toLocaleLowerCase())}
                        filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={deliveryOpt}
                        onChange={handleDeliveryPoint}
                        disabled={!village}
                    />
                    </Form.Item>
                    <Form.Item style={{width: '100%'}}>
                        <SubmitButton form={form} />
                    </Form.Item>
                </Form>
            </Card>
        </>
    )
}

export default OrderCard;
