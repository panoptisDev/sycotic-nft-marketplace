const Partner1 = () => {
  const partnerItem = [
    {link:'https://www.cameltoecan.com/',image:'partner_dao_1'},
    {link:'https://swap.crodex.app/#/swap',image:'partner_dao_2'},
    {link:'https://phenix.finance/',image:'partner_dao_3'},
    {link:'https://www.cameltoecan.com/',image:'partner_dao_1'},
    {link:'https://swap.crodex.app/#/swap',image:'partner_dao_2'},
    {link:'https://phenix.finance/',image:'partner_dao_3'},
    {link:'https://www.cameltoecan.com/',image:'partner_dao_1'},
    {link:'https://swap.crodex.app/#/swap',image:'partner_dao_2'},
    {link:'https://phenix.finance/',image:'partner_dao_3'},
    {link:'https://www.geckoterminal.com/cro/pools/0x172ef983f851bcdbf2a26a14756955a9c5954b7d',image:'partner_dao_4'},
    {link:'https://www.geckoterminal.com/cro/pools/0x172ef983f851bcdbf2a26a14756955a9c5954b7d',image:'partner_dao_10'},
  ];
  return (
    <>
      {partnerItem.map((item, i) => (
        <a
          href={item.link}
          className="flex flex-shrink-0 items-center justify-center rounded-2.5xl bg-jacarta-900 p-4 opacity-80"
          key={i}
        >
          <img src={`/images/dao/${item.image}.jpg`} alt="partner item" />
        </a>
      ))}
    </>
  );
};

export default Partner1;
