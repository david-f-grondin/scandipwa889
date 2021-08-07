/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */
/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
import PropTypes from 'prop-types';
import { Component } from 'react';

import './CheckoutStepper.style';

/** @namespace Component/CheckoutStepper/Component */
export class CheckoutStepper extends Component {
    static propTypes = {
        steps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        currentStep: PropTypes.number
    };

    static defaultProps = {
        currentStep: 1
    };

    renderStepNumber(isHighlighted, isCompleted, stepIndex) {
        return (
            <div block="Step" elem="Number" mods={ { isHighlighted, isCompleted } }>
                <span>{ stepIndex }</span>
                <span block="Step" elem="NumberCheck" />
            </div>
        );
    }

    renderStepLineDivider(isHighlighted, isFirstStep) {
        if (isFirstStep) {
            return null;
        }

        return (
            <div block="Step" elem="LineDivider" mods={ { isHighlighted } }>
                <span />
            </div>
        );
    }

    renderFirstLineDivider(isFirstStep) {
        if (!isFirstStep) {
            return null;
        }

        return (
            <div block="Step" elem="FirstLineDivider" />
        );
    }

    renderLastLineDivider(isLastStep) {
        if (!isLastStep) {
            return null;
        }

        return (
            <div block="Step" elem="LastLineDivider" />
        );
    }

    renderStep(step, index) {
        const { currentStep, steps } = this.props;
        const stepIndex = index + 1;
        const isFirstStep = stepIndex === 1;
        const isLastStep = stepIndex === steps.length;
        const isHighlighted = currentStep >= stepIndex;
        const isCompleted = currentStep > stepIndex;

        return (
            <div block="Stepper" elem="Step">
                { this.renderFirstLineDivider(isFirstStep) }
                { this.renderStepNumber(isHighlighted, isCompleted, stepIndex) }
                <b block="Step" elem="Description" mods={ { isHighlighted } }>{ step }</b>
                { this.renderStepLineDivider(isHighlighted, isFirstStep) }
                { this.renderLastLineDivider(isLastStep) }
            </div>
        );
    }

    renderSteps() {
        const { steps } = this.props;

        return (
            <div block="Stepper" elem="Steps">
                { steps.map((step, index) => this.renderStep(step, index)) }
            </div>
        );
    }

    render() {
        return (
            <div block="Checkout" elem="Stepper">
                { this.renderSteps() }
            </div>
        );
    }
}

export default CheckoutStepper;
