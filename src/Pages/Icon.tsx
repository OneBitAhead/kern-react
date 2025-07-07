
import { KernIcon, KernHeading, KernText } from '../components/kern';


function Elements() {




    return (
        <>


            <KernHeading>Icon</KernHeading>
            <KernText>...</KernText>

            <KernText type="title">Icons</KernText>

            <KernIcon icon="mail" /> Mail <br/>
            <KernIcon icon="arrow-back" /> Arrow-Back <br/><br/>


            <KernText type="title">Large Icons</KernText>

            <KernIcon icon="mail" size="large"/> Mail <br/>
            <KernIcon icon="arrow-back" size="large"/> Arrow-Back <br/><br/>


        </>
    );

}

export default Elements;