/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */
/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
import { CheckoutStepper } from 'Component/CheckoutStepper/CheckoutStepper.component';
import { ContentWrapper } from 'SourceComponent/ContentWrapper/ContentWrapper.component';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';

import './Checkout.extension.style';

/** @namespace Route/Checkout/Component */
export class Checkout extends SourceCheckout {
    renderStepper() {
        const { checkoutStep } = this.props;
        const steps = Object.values(this.stepMap).map((step) => step.title);
        const currentStep = Object.keys(this.stepMap).indexOf(checkoutStep) + 1;

        return (
            <CheckoutStepper
              currentStep={ currentStep }
              steps={ steps }
            />
        );
    }

    render() {
        return (
            <main block="Checkout">
                { this.renderStepper() }
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout;
