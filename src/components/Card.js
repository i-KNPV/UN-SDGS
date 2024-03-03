import { useAnimate } from "framer-motion";
import React, { useRef } from "react";

export const Example = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={15}
      images={[
        "https://lh3.googleusercontent.com/pw/AP1GczN_rVa2XDHZ93MLpxLaaCdoVs5rdRgsah5NC8HNb9Mqlv4xAz_jHrQ23-BT6kPO39PQW-hMifXN95y80M94I_xLgj4MhpZB30izM7QTq-EaIFZ_wMP-HjVnQMCmSQe7_dAzwsIRj6DdHOBzF_LOrwbI=w1010-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczNz-bBjfkhLS-I0bmVfIXW5vOlWuWTZO1z9Zy-vgMICVRyH0BEoIjf-Ugr7MnUckMmDezD2sJNGlwuU9QfPbOocTWUbJDaYTBTzCFXz745h2NKqRcz5wcO5h_S7k_PziW9yk23YeQ889TAEv3lebcL7=w1010-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczNIdqX9AuAx6dXgovbWUXSO6mHE6bD80bYzM_J_Xl2P6OAbF6Q6pVLgk8NbZA67xPLt8VTfc2A17nEE0rLrW5Qq7ksFXo5XM4F-tZgBE-ytyQWPss6u4-0VNDK48tEN1Gg305C2nnvhKAbBdU-SnMEO=w1010-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczP5cnPxkUtpBw_znt5Axf6uEqVJez2LvcFo_K4aw8q-CfRfZfvApHV92tU17ZQ7hgWFQaD3mFRn8hmmBdLCPoZ1cNRxw37EsqFQKtyEtCBWhKQv4mzBiwEfjq6Q1W73s_SLPv9kCsDSvsT32h9qN_Oa=w1010-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczO67ev6RVzKiAM7i8MW0bv19bn4AA24deZ21tC9_4cY7JFM2qvKgod04mawY3mGhrUuo2clk9My0yplEbidGQJ6EHCmtef3wK5ilLppDXA2WYQ_B8ATkJo7nMzX6NjAKXXaB1LEC_VD-W7WAv6blhgW=w1010-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczNMxuYSy7u1ixZSVIvzcrdNiSxRYIRYaUtwat2bu8eAr4bLMtoLPQp12DPiyoFZ8DTQgDHb4mCR_rSU0F2cBWwAD9d-v187gO9xczNjyEgzySnqHuZjHhHVz-Vcgv0gY_c17qh5MSIbRZBIu8acCsQH=w1010-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczMjdPQjrSmR7VxRWaZYd0M3HC5-Js0yqsAZvqfb5LAKu4TMijNFxIKMRxPLzjFhZ-rGo9woEuO9zOSCtR9MyG0_CivSh2YO1QnxDr6K9Xybmab7v_V16vJphPiBc7unZph_pKU305yRblODOgjnvfZK=w1010-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczM-GhVok24XRlGByKiHVegIke2nXSLqwTZ_yfLLkuFhtxwrrrnGv7G_tM6bxptfwIpeShyCF1sfS6arG6fVNiOUo0ubwQGotDRKpYB4IH5NoJVxMYHMGUtSZolMzQ5BknlIHcIuYmeVPdNTgA3rJ1bZ=w1515-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczMUwfqN8N1pZOL-KTexMEWnW2phPu2fkqshIkDolcbn4W-AJfIayK1GmPSC4l4QGm9uKdd4BnSV3tMo_W2mOYkRw-OfZZmg61oEErpip02rZ-wvj9VS7gGX5062w2t_km_B7BVMfgnLO1QQnOVpNgiL=w1010-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczPBkPCbs8kv_j87myobLIvpRm87TO8QYbXbNzHyqbwQqra7iQfpnuCqThCBH6YVn1CQvmXJKXBBe0SvaOZb6IFdKBH8sV-1fqznwOnXyZsqiUkZyZLrY4Ec_LV0lpXhlY_A93DGyPgCaEYaS70TJ0Kj=w1010-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczO13OLwxvwlre9wTakvIVTmXLTCdwkoVQDlpF4TzJ0zKOg8f6QGP1phC-FsAokMiF2xMUhvLxu-ACytyxEHtxduVZixgcXV0emkNqUA78yDKFgx0u4OhyNmicvMlr8TBBr2ibj2962rcmeepeciQt3P=w1010-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczNZSs_7lGY6aZ_2qdIVm7ZoAM4k6n7x-WOaG8eA3sc3AmWAgIR4K1-vcp07QN0-1_9j36ECJChm7LlBl_LsMt5cePMlANvYfeDq5nA_Jf-8nfgywbH5C3ryjNrpoVmnMOEzI9bAIYJK6dAs6cJ7lm-b=w1010-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczM_4dE7SNfd5xQrCDUiKmAsbvta9Q-fHJELS_hkJE4YU2l7aXhxefAwYMbYQaMIZQJ8rOvirOi75gFlQeYIE15QhV8i0iIf701J6ixqiPiKkbBUqOCWId3ViSfbzBk-cPAC-z8f9JgQnjk4mTJ7cBnS=w1010-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczOO0Mm9jptNaNfBxHKMQHJQnFBCEgVGigLE35BYt6wZ7Gg6syK6sa8ME8BPQ7qk8gDcQGgStDUzKOqOLaSJF26xZwkE3cOHvzmXsVIqwlcR_PCPlvxWn8TSXO3x7NWGXOnaVgMN6TT9hF0nql23n-2f=w758-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczMo4uB330qT9-sSgfPGvg7S6P5DvQLBJPHrsuxWPePJBnnvMn_yQdRjMGoeSgUlwNq52-cHvyVjr2iGcSU1dvGNzWWwfxu2WKzHn1IGi4XP1l3LNUiPAUdmpfb9ceSN23k44Y7itKgBV_GGrts3elNy=w1347-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczPBl7esOgSFn12ROIHQaukcax9GHdDK1sxjn6ibVv-adrvwUP7i3Y44U5UlOEgm_lu0UhYVhjP5mfGiVV44JWyt2kr5jExJN-keFPXshJ5JHF9zJJp_SPARiAW9ITZBm0FP3UegqUGSLmnYQJP4msom=w1347-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczMhXZt8v4eR5gV46wgVVIV8XMJPzZbte-EJy9JfVGevxrBlXwV8dKX4ToBN4e2_UlNN571n3MlNXD4S9IBZKLVIJ8xNzkG1Rd3jb19saJhxpmCXed83GNmsiB9p4CLcPn6R0YBbWghVuVlcWGLUsont=w758-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczNSOWN0IsfH2PrL_p-1i8zJYVZmd0YtSNXyvexQDHXS5IZ14kyQScr7C46B7a9-3e5DwiWH7MCFk5deKlGEauUNmBrmuW9f5mHCMmKOtmFbOjaU-DIbQ4Azzd2iUDF-4ZcQ_9IIHoOBY4yIPOFHGGqY=w1515-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczONFyhoLnJ_gmPZZTf_BTGczbIsg0S-edkNAuWXONv908PFRVDZdvUiEcZ9lYALqzbAquttgRgno-wbD57XzKZCbKqkT48IEOJdBN3jlhwt9g46n_VNUzQS-a_dEjLWIDQ_FlvOjXYeTxDcTSQHzHLE=w1744-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczOtZQvWJW5toZDS_k4H5_1QKWYqxEnEqw7y8x4i6vAydV_IrCF8dNO_BlBzybjhAlhdlaUZAbpSCDYIVe6ldl_jE9seUZRPZDksm4_vGiLZDDMopfifH7R7U6hfmOLm9bt6n89naBuceTJabc8C3gL0=w1494-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczP_BB41g5xn_FJzFNJNCGG7fHcjB0mj2otmRDbyazowpXSbzemFcN2JgCZ9P_346PKTbMklBalhy8ahR4HG-YRs0PLCPtESYWsyVDqiexRHyi6W9lp9nZLhXgcKKhWl6IsKAoc4QKChXMUIywlqRub1=w1515-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczOhKoeRTf8xOYU4MReb7FWtvQl8O1Q9k_ocJNpBY2tnztzTUnZzWz-xRpv_ojwDTqKbr17Pv3cIpsIMrho8IRwanL1nOq0U26BQH1_LzE6d1iFdYim0lfKMceY_FLdfe24TzgETrLd425t6dMNtlMOx=w1462-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczMwhDqVtMCXBEIGimJSmYlw3LHt-ugcNVKhEyspbArSoBsgHaNKn9tvYmabe9QdVjT4LgYFFLL9q0Pq9h7YYYad4dlkz4OABZQ1ios9IH6N50C-ye1dowIj6uyCJUnTI5JgNRqL6bwoVirkdKwPGoF3=w1515-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczPPWtpTDE0LDt21q2KR0rURJG7cOwQhaAAaXKjoDl60ufh9EzIuCp753nhS4KduDiZaUKvqNKkM6GoMnQdqY2QsbQBlo5zD8Kx75k5xGjg3zl5iV9aw2wwpQTV6buE4WlOd1XBNw3UtG7lUXv_KoSiV=w1731-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczOa0l5qbAvyqBIHwzQalr8bUGqlJbtd6CWaifBw6y2TCrqcH7q-rlxiuMw7l3Jxy1f7NTy1MOTxQrjUbmkMsUmCykxhGFstvHY5wFPcFt-nHc3vQsAdfr6Joax6GQceBwvWVZ5vgr9PwfQY4dcTlUF8=w1515-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczPmXbq7l05XPyh7RHYoThUfMrTj4ptd2YO8Kc8joVHkZGdwXYE5kPuhJIkIWsZuPpNrOii_kY1c0U6Dn9Afo1NZwB2htqTkAEP1bYGVJhbi7LD3Sp33xIWrVt0rfbAnqf6ehQwcyCGrdOBIRHwkLrrD=w1515-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczOPXA46lazZAg-0NDd7bD3SUYtTUV5J4vwVk2UT51me5GenBqVEXVwzlYj44XRvCsdnFjK-vEeRQFrSdTdQXRIizEvtOIoxO4T57Fqbo77caYPFzD34cx7hkH5Tkk2OZ9s4gKBYeVBRHJ4yh4yqb_vB=w1515-h1010-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczOba1p6oy1gh_5EerGGUnwM5n0itiaorN2GO2WeVPi3LBMac1G7wO1lzmS-LHcQn9ArePyad1AV7hdOa2WwMCwH4NmiSrMNLfl9U6zwghLwiZQhdsUlIQOwQ-Vssx-DvsBmuRg2P81Wl3jUsrRw4WFc=w1478-h1010-s-no?authuser=0",
      ]}
    >
      <section className="grid h-screen w-full place-content-center">
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto border-2 border-black bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};

export default Example;