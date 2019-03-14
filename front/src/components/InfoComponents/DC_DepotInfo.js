import React, { Component } from 'react';


class DC_DepotInfo extends Component {
  render() {
    return(
<div>
        <div className='DC_Depot'>
        <h2 style={{ color: "red" }}>
      The DC Depot:
        </h2>
        <h2 style={{ color: "yellow" }}>
        The Marketplace for Ideas
        </h2>
        <br/>
        <p>
        The DC Depot is DecentraCorps CryptoCurrency Based Online Marketplace powered by Notio and the Decentralized Facilities Model.
        The DC Depot is capable of faciltating the sale and purchase of any item, though its original intended purpose is to be a paltform for
        replicators to sell replications of the ideas stored on the CryptoPatent Blockchain.
        </p>
        <p>
        The logic for the DC Depot is split into three parts, the Notio logic, the PoP Token logic, and the DC Depot contract itself.
        </p>
        <p>
        The DC Depot contract contains the logic to escrow the funds of a sale on any item sold through it. This escrow process starts when a purchase is made.
        The funds for the purchased item are sent to the DC Depot contract where they are escrowed(there is no way either buyer or seller can release these funds).
        The purchased item is then mailed to an approved DecentraCorp Facility where its condition is confirmed and recorded by the facility operator.
        The facility operator then repackages the item and ships it to the buyer. Upon receipt
        of the item, the buyer notifies the Facility Operator who then releases the escrow of that item. All parties involved then receive some newly minted Notio
        for using the DC Depot.
        </p>
        <p>
        A DecentraCorp facilities ability to act as a DC Depot Processing Facility is determined by both its operators membership level and their facilities rank.
        The only way to increase a members level or a facilities rank is by producing ideas or replications on the CryptoPatent Blockchain. This ensures that a resonable
        level of investment in ones position in the company has been obtained before you are trusted to operate a processing facility. On top of this, it is also possible for
        an operator to lose Facility ranking through negative reveiws, thus losing its ability to act as a processing facility. A Members level cannot be effected the same way.
        </p>
        <p>
        The Dc Depot utilizes Notio as a utility token in two seperate ways. First, it is used as an incintive to use the platform. A buyer, seller, and Facility Operator
        all earn some newely minted Notio upon a successful purchase. They receive this even if Notio is not used as a payment method.
      </p>
      <p> Second, Notio is used to give the DC Depot
        an ability no other online Marketplace has; The DC Depot can offer a discounted price on ANY ITEM FROM ANY SELLER as long as its purchased in Notio! This is because
        the DC Depot has the ability to mint the seller the difference between what they asked for and the discounted price.
        </p>
        <p>
        Finally, every item sold through the DC Depot has an associated Proof of Purchase Token(POPT) that stores the purchase history of that item. The Amount
        of PoP Tokens a buyer or seller holds determines how many Notio they mine when using the DC Depot.
</p>
<p>
         The PoPT is an ERC721 based utility token that
        will give any item the ability to "item mine". Item Mining is a process whereby an Item is digitized into a PoPT. the PoPT is then used like a piggy bank by its owner to store Notio.
        The Item then encrues interest on this banked Notio dependant upon the amount stored AND the duration of storage.
        </p>
      </div>
      </div>
    );
  }
}

    export default DC_DepotInfo;
