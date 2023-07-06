import { useParams } from "react-router-dom";
import { ItemsDetailsContainer } from "./ItemsDetailsContainer";


export const ItemsDetailsRoute = () => {
	const { id } = useParams();
	const itemid = id || ""
  
	return <ItemsDetailsContainer id={itemid} />;
  };
