import React, { useState, useEffect } from "react";
import { 
    Card, 
    Image, 
    Typography, 
    InputNumber, 
    Divider,
    Col, 
    Row, 
    Statistic 
} from 'antd';
import './ItemCard.css'

interface Item {
    Image: string,
    Price: number,
    Name: string,
    Desc: string
}

interface ProductCardProps {
    item: Item | null,
    onQuantityChange: (newQuantity: number, newTotal: number) => void;
}

const ItemCard: React.FC<ProductCardProps> = ({ item, onQuantityChange }) => {
    const [ellipsis, setEllipsis] = useState(true);
    const [qty, setQty] = useState(1);
    const [total, setTotal] = useState(item?.Price);

    const onChange = (value: number | null) => {
        if (value && item?.Price) {
            setQty(value);
            setTotal(value * (item?.Price));
        }
    };

    useEffect(() => {
        if (qty !== undefined && total !== undefined) {
            onQuantityChange(qty, total);
        }
    }, [qty, total, onQuantityChange]);

    return (
    <>
    <Card style={{maxWidth: '400px'}}>
        <div className="item-block">
            <Image src={item?.Image} height={100}/>
            <div>
                <div className="item-name"><Typography.Title level={4}>{item?.Name}</Typography.Title></div>
                <div className="item-desc"><Typography.Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'Детально' } : false}>{item?.Desc}</Typography.Paragraph></div>
            </div>
           
        </div>
        <InputNumber addonBefore={'Кількість'} style={{ width: '100%' }} min={1} defaultValue={qty} onChange={onChange} changeOnWheel/>
        <Divider style={{marginTop: '15px',marginBottom: '15px'}}/>
        <Row gutter={16}>
            <Col span={12}>
                <Statistic title="Ціна за 1 од." prefix='₴ ' value={item?.Price} />
            </Col>
            <Col span={12}>
                <Statistic title="Загалом" value={total} prefix="₴ " />
            </Col>
        </Row>
    </Card>
    
    </>
    )
}

export default ItemCard;


