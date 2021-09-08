import React from 'react';
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesIcon, ServicesH2, ServicesCard, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <>
            <ServicesContainer id='services'>
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>We help reduce your fee and increase overall revenue.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>Access our platform from anywhere in the world. It is completely safe and secure.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>Unlock special benefits by becoming a loyalty program customer.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
