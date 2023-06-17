const Partner2 = () => {
  const partnerItem = [
    "partner_dao_8",
    "partner_dao_9",
    "partner_dao_10",
    "partner_dao_11",
    "partner_dao_12",
    "partner_dao_13",
    "partner_dao_14",
    "partner_dao_8",
    "partner_dao_9",
    "partner_dao_10",
    "partner_dao_11",
    "partner_dao_12",
    "partner_dao_13",
    "partner_dao_14",
  ];
  return (
    <>
      {partnerItem.map((item, i) => (
        <div
          className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-accent-dark opacity-80 p-4"
          key={i}
        >
          <img src={`/images/dao/${item}.jpg`} alt="partner item" />
        </div>
      ))}
    </>
  );
};

export default Partner2;
