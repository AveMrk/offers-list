import { ReactNode } from "react";

interface IList {
  listing_id: number;
  url: string,
  MainImage: object,
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}
interface MessageProps {
  items: IList[];
}

type F = (num: number) => ReactNode;
export default function Listing({ items }:MessageProps) {
  const findQuanity: F = (num: number) =>{
    if(num <=10){
      return (
        <p className="item-quantity level-low">{num}</p>
        )
    } else if (num<=20){
      return (
        <p className="item-quantity level-medium">{num}</p>
      )
    } else {
      return (
        <p className="item-quantity level-high">{num}</p>)
    }
  }
  
  return (
    <div>
      Listing
      <div className="item-list">
        {items.map(
          ({
            listing_id,
            url,
            MainImage,
            title,
            currency_code,
            price,
            quantity
          }) => (
            <div className="item">
              <div className="item-image">
                <a href={url}>
                  <img src={MainImage.url_570xN} alt={title} />
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{title}</p>
                {currency_code === "USD" || currency_code === "EUR" ? (
                  <p className="item-price">{currency_code + price}</p>
                ) : ( <p className="item-price">{price + currency_code}</p>
                )}
                {findQuanity(quantity)}
              
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}