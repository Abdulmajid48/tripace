import { travelideas } from "../components/Bodies";
import { Idea, Travelidea } from "../components/Bodyparts";
import { Inspirationbar } from "../components/Navbars";

function Travelideas(props) {

    return (
      <div>
        <Inspirationbar />
        <Travelidea
          img={'url("./images/bookingpic.svg")'}
          howcan={"Your Travel Ideas are Ready"}
          givebrief={"You can now choose from the options supplied for you."}
          idea= {travelideas.map((idea, index)=>{
            return <Idea
            key={index}
            city={idea.city}
            accomodation={idea.accomodation}
            highlight1={idea.highlights1}
            highlight2={idea.highlights2}
            highlight3={idea.highlights3}
            link={idea.link}

            
            
             />
          })}
        />
      </div>
    );
    
}

export default Travelideas;
