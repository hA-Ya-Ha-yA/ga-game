import Color1 from "../PikaColor/Color1";
import Color2 from "../PikaColor/Color2";
import Color3 from "../PikaColor/Color3";
import Color4 from "../PikaColor/Color4";

type Props = {
  empty: Array<number>;
  full: Array<number>;
  SolComp: Array<number>;
};

//クライアント側で生成される配列のため、ページ初期ロード時に生成された配列と不一致になる
export default function PikaOneLine(props: Props) {
  const { empty, full, SolComp } = props;

  //console.log(SolComp);
  const oneline: any = [];
  let count = 0;

  for (let i = 0; i < empty.length; i++) {
    const zeroline = Array.from({ length: empty[i] }, () => 0);
    oneline.push(...zeroline);

    if (oneline.length !== 20) {
      if (full[i] !== 0) {
        const numpart = SolComp.slice(count, count + full[i]);
        oneline.push(...numpart);
      } else oneline.push([]);
      count = count + full[i];
    }
  }

  return (
    <>
      <div className="flex">
        {oneline.map((number: any, idx: any) =>
          number === 1 ? (
            <Color1 key={idx} />
          ) : number === 2 ? (
            <Color2 key={idx} />
          ) : number === 3 ? (
            <Color3 key={idx} />
          ) : (
            <Color4 key={idx} />
          )
        )}
      </div>
    </>
  );
}
