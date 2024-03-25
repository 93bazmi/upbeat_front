import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./styles.module.css";

import imgPlayer1 from "./photos/p1กบ.png";
import imgPlayer2 from "./photos/p2ไก่.png";
import boxTopic from "./photos/Chosen charecter.png";

/* Header, Header2, Subheader, Content: Components ที่ใช้สร้างหัวข้อและเนื้อหาของเว็บหรือแอปพลิเคชัน โดยรับ children เป็น prop เพื่อให้สามารถแสดงข้อความหรือ elements ภายในได้ตามต้องการ */
export const Header = ({ children, ...rest }) => (
  <h1 className={styles.header} {...rest}>
    {children}
  </h1>
);

export const Header2 = ({ children, ...rest }) => (
  <h1 className={styles.Header2} {...rest}>
    {children}
  </h1>
);

export const Subheader = ({ children, ...rest }) => (
  <small className={styles.subheader} {...rest}>
    {children}
  </small>
);

export const Content = ({ display = "", children, ...rest }) => (
  <div
    className={cn(styles.container, {
      [styles.gridDisplay]: display === "grid",
    })}
    {...rest}
  >
    {children}
  </div>
);

/* CharacterBox: Component ที่ใช้สร้างกล่องที่แสดงข้อมูลของตัวละคร รับ props ต่าง ๆ เช่น isSelected (บอกว่าตัวละครถูกเลือกหรือไม่), type (ชนิดของตัวละคร), src (ที่อยู่ของรูปภาพ), และอื่น ๆ */
export const CharacterBox = React.forwardRef(
  (
    {
      isSelected,
      type,
      headerProps = {},
      imgProps = {},
      src,
      disableFlashing,
      ...rest
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(styles.CharacterBox, {
        [styles.selectedBox]: isSelected,
      })}
      {...rest}
    >
      {type && (
        <h3 className={styles.textName} {...headerProps}>
          {type}
        </h3>
      )}
      <img
        {...imgProps}
        src={src || imgProps.src}
        className={cn(styles.tier2, imgProps.className, {
          [styles.selected]: isSelected,
          [styles.noAnimation]: !!disableFlashing,
        })}
        alt=""
      ></img>
    </div>
  )
);

/* characterSelections: คือ array ของตัวละครที่เลือกในเกม โดยแต่ละตัวละครมี properties เช่น type (ชื่อ) และ src (ที่อยู่ของรูปภาพ) */
const characterSelections = [
  { type: "Aong", src: imgPlayer1 },
  { type: "Tiger", src: imgPlayer2 },
];

/* Main */
/* useLevelUpScreen: เป็น custom hook ที่ใช้สำหรับการจัดการสถานะและการกระทำของ component ที่เกี่ยวข้องกับหน้าจอของการเลื่อนระดับ (level up screen) โดยมีการใช้ useState เพื่อเก็บข้อมูลเช่น selected character, สถานะของการเลื่อนระดับ (morphed), และ ready ซึ่งเป็นตัวบอกว่า component พร้อมที่จะแสดงผลหรือไม่ */
const useLevelUpScreen = ({ morphRef, morphedRef }) => {
  const [selected, setSelected] = React.useState(null);
  const [morphing, setMorphing] = React.useState(false);
  const [morphed, setMorphed] = React.useState(false);
  const [ready, setReady] = React.useState(false);

  const onSelect = (type) => (e) => {
    setSelected(type);
  };

  const onMorph = () => {
    setMorphing(true);
    setTimeout(() => {
      setMorphing(false);
      setMorphed(true);
    }, 1500);
  };

  return {
    selected,
    onSelect,
    morphed,
    morphing,
    onMorph,
    ready,
  };
};

const Character2 = () => {
  const morphRef = React.createRef();
  const morphedRef = React.createRef();
  const { selected, onSelect, morphing, morphed, onMorph, ready } =
    useLevelUpScreen({
      morphRef,
      morphedRef,
    });

  return (
    <div>
      <div className={styles.bg}></div>
      <img
        src={boxTopic}
        style={{
          width: 450,
          height: 110,
          marginLeft: 550,
          marginTop: 50,
          position: "fixed",
        }}
      />

      {/* Use Link component for navigation */}
      {/* <Link to="/">
        <img src={boxBack} alt="Back" className="button-Back" />
      </Link> */}

      {/* <div style={{ marginTop: "-10px auto" }}></div> */}

      <Content></Content>
      <Subheader></Subheader>
      <div style={{ margin: "0px auto" }}>
        <Subheader></Subheader>
        <Content display="grid">
          {characterSelections.map((props, index) => (
            <CharacterBox
              key={`char_selection_${index}`}
              onClick={onSelect(props.type)}
              isSelected={selected === props.type}
              {...props}
            ></CharacterBox>
          ))}
        </Content>
      </div>

      <div
        className={cn({
          [styles.morphed]: morphed,
        })}
      >
        <Header2>
          Player2 select <em>{selected}</em>
        </Header2>
        <Content></Content>
        <Subheader></Subheader>
      </div>

      <div
        ref={morphRef}
        className={cn(styles.morph, {
          [styles.hidden]: !selected,
        })}
      >
        <a href="/play">
          <button
            ref={morphRef}
            name="morph"
            type="button"
            className={styles.morph}
            onClick={onMorph}
            disabled={morphed}
          >
            {morphed ? "Ready" : "START"}
          </button>
        </a>
      </div>

      <div
        className={cn(styles.next, {
          [styles.hidden]: !ready,
        })}
      ></div>
    </div>
  );
};

export default Character2;
