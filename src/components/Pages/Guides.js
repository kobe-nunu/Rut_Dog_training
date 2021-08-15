import React, {Component} from 'react';
import SingleGuide from '../Common/SingleGuide';

const lorem = 'ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת.';
const guides = [
    {title:'איך מלמדים את הכלב לשחק מת?', subtitle: lorem, image:"assets/img/portfolio/1.jpg",},
    {title:'שיעור כלבי הגנה', subtitle: " הגנה להרבה מטרות- כלבי צבא, הגנה על שטח, הגנה על אדם ועוד. בסרטון רואים אימון של רועה גרמנית מקו דם עבודה שצריכה להגן על הבעלים שלה. חשוב לציין שהכלבים האלה מאומנים מאוד ובעלי משמעת שיא. כלומר, אין מצב שהם יתנפלו ככה על אדם בלי לקבל את הפקודה מהבעלים. חלק מהאימון (בשלב מתקדם יותר) הוא גם ללמוד לשחרר בפקודה.", image:"assets/img/portfolio/2.jpg"},
    {title:'עבודה עם פולר', subtitle:"בסרטון אפשר לראות סשן עם פולרים כדי לבנות תבניות משחק נכונות, כולל תפוס, עזוב, ראונד, סיבוב, איפוק ועוד. כל זה תוך כדי משחק ששתינו נהנות ממנו מאוד!", image:"assets/img/portfolio/3.jpg"},
    {title:'איך מלמדים כלב להחזיר צעצוע?', subtitle: "כשמלמדים כלב משהו חדש צריך לחשוב על משהו מאוד חשוב: מה יוצא לכלב מכל הסיפור? בשביל ללמד כלב להחזיר את הצעצוע אליכם, אתם חייבים לוודא שאצלכם הוא יקבל את החיזוק המשמעותי יותר! בשביל לעשות את זה קודם כל צריך להבין, מה החיזוק של הכלב? רדיפה? קרב? אוכל? כל כלב והחיזוק שלו. הצעצוע שיש לכלב בפה חייב להיות פחות מעניין מהצעצוע שיש לי ביד! בסרטון זאת לא הפעם הראשונה שאנחנו מתרגלות ולכן אני יכולתי להרשות לעצמי להיות הרבה יותר סטטית. בפעמים הראשונות הצעצוע שאצלכם צריך לדמות צייד חי! הוא צריך לזוז, לצפצף, להיות מעניין יותר מזה שיש לכלב. כשהכלב מגיע אליכם עם הצעצוע הראשון, הוא מקבל את החיזוק שלו!", image:"assets/img/portfolio/4.jpg"},
    {title:"הרגלה לכלוב", subtitle: "כלוב אילוף... אחד מכלי האילוף הטובים ביותר שקיימים לרשותנו. שימוש נכון בכלוב אילוף יתן לכלב מאורה. חדר בבית. מקום שכיף לכלב להיות בו והוא יודע להרגע בו. מעבר לזה, הוא יעזור לנו לפתור בעיות צרכים, הרס של רהיטים ועוד כל כך הרבה. אבל איך עושים את זה? איך מאכילים כלב לכלוב אילוף? קודם כל, בהדרגתיות. אי אפשר לזרוק כלב לתוך כלוב, לסגור וללכת. זה המתכון הבטוח ליצירת אנטיגוניזם ושנאה לכלוב. בסרטון, אחד התרגילים הבסיסיים שצריך לעשות כדי להתחיל ליצור לכלב קונוטציה טובה בקשר לכלוב, ועל הדרך ללמד את הפקודה 'למקום'. אני מעודדת את קאלה להכנס בעזרת לורינג, ומעודדת אותה להשאר בפנים על ידי זריקת חטיפים פנימה (כשאת בכלוב קורים דברים טובים!) בנוסף, אני ממליצה לתת לכלב כל חטיף או עצם שווה רק בתוך הכלוב!", image:"assets/img/portfolio/5.jpg"},
    {title:"מודעות גוף - עבודה על משטח לא יציב", subtitle: lorem, image:"assets/img/portfolio/6.jpg"}
];

class Guides extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    

    render(){
        return(
            <section className="page-section" id="main">
                <link href='http://serve.fontsproject.com/css?family=Ozrad+CLM:700' rel='stylesheet' type='text/css'></link>
                <link href='http://serve.fontsproject.com/css?family=Journal+CLM:100' rel='stylesheet' type='text/css'></link>
                <div className="container">
                    <div className="text-center">
                    <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h2 className="section-heading text-uppercase" id = "heading-override">מדריכי וידאו</h2>
                        <br/>
                        <h3 className="section-subheading text-muted" id = "subheader-override">{lorem}</h3>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className="row">
                        {guides.map((item,index) => {
                            return <SingleGuide {...item} key={index} href = {"#portfolioModal" + String(index+1)} />
                        })}
                    </div>
                </div>
            </section>

        )
    }
}
export default Guides;