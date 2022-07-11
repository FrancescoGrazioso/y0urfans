import {PayPalButton} from "react-paypal-button-v2";
import Image from "next/image";
import profilePic from "../public/static/images/avatar.jpg";
import ImageComponent from "../components/imageComponent";


function Subscribe() {
    const subscriptions = [
        {id: 1, name: "Iscrizione 1 mese", price: 64, plan_id: "P-27645018P37809351MLAEYTA", price_off: undefined},
        {id: 2, name: "Iscrizione 2 mesi", price: 128, plan_id: "P-6L173102TU289824DMLCHRFQ", price_off: 10},
        {id: 3, name: "Iscrizione 3 mesi", price: 256, plan_id: "P-6L173102TU289824DMLCHRFQ", price_off: 30},
        {id: 4, name: "Iscrizione 4 mesi", price: 512, plan_id: "P-6L173102TU289824DMLCHRFQ", price_off: 50},
    ];

    return (
        <div className="uk-container">
            <div  className="uk-grid uk-flex-center">
                {subscriptions.map(subscription => {
                    return (
                        <div key={subscription.id} data-uk-grid>
                            <div className="uk-card uk-card-default uk-text-center uk-card-hover uk-card-small">
                                <div className="uk-card-header">
                                    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                                        <div className="uk-width-auto">
                                            {subscription.name}
                                        </div>
                                    </div>

                                    <div className="uk-card-body">
                                        <div className="uk-width-expand">
                                            {subscription.price} €
                                        </div><div className="uk-width-expand">
                                            {subscription.price_off?
                                                <h3 className="uk-text-meta uk-margin-remove-bottom">Risparmi il {subscription.price_off}%</h3>
                                                :
                                                <br />
                                            }
                                        </div>
                                    </div>

                                    <div className="uk-card-footer">
                                        <PayPalButton
                                            options={{vault: true,
                                                clientId:'AQS_FpgQnUSh3HK3CPIpL-W73-cuAw3IfJfFXcNAXj7nVXRyGocgJhT-wbmMxdJ1GLSc8GFTWlDlGSIr',
                                                intent: 'subscription'}}
                                            createSubscription={(data, actions) => {
                                                return actions.subscription.create({
                                                    plan_id: subscription.plan_id
                                                });
                                            }}
                                            onApprove={(data, actions) => {
                                                // Capture the funds from the transaction
                                                return actions.subscription.get().then(function(details) {
                                                    // Show a success message to your buyer
                                                    alert("Subscription completed");
                                                    console.log(details);

                                                    //TODO salvare che il pagamento è stato effettuato e abilitare l'utente
                                                });
                                            }}
                                        />
                                    </div>

                                </div>
                            </div>
                            <br/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Subscribe;


/*

<PayPalButton
                    options={{vault: true,
                        clientId:'AQS_FpgQnUSh3HK3CPIpL-W73-cuAw3IfJfFXcNAXj7nVXRyGocgJhT-wbmMxdJ1GLSc8GFTWlDlGSIr',
                        intent: 'subscription'}}
                    createSubscription={(data, actions) => {
                        return actions.subscription.create({
                            plan_id: 'P-27645018P37809351MLAEYTA'
                        });
                    }}
                    onApprove={(data, actions) => {
                        // Capture the funds from the transaction
                        return actions.subscription.get().then(function(details) {
                            // Show a success message to your buyer
                            alert("Subscription completed");

                            // OPTIONAL: Call your server to save the subscription
                            return fetch("/paypal-subscription-complete", {
                                method: "post",
                                body: JSON.stringify({
                                    orderID: data.orderID,
                                    subscriptionID: data.subscriptionID
                                })
                            });
                        });
                    }}
                />


* */