import { useState, useMemo } from "react";
import {
  BookOpen, GraduationCap, LayoutDashboard, Users, Search, Star,
  CheckCircle2, Circle, PlayCircle, FileText, Award, ChevronLeft,
  ChevronRight, Plus, Trash2, Edit3, X, Menu, LogOut, User as UserIcon,
  ClipboardCheck, BarChart3, ShieldCheck, Filter, Sparkles
} from "lucide-react";

const BRANCHES = [
  { id: "nahw", label: "النحو" },
  { id: "sarf", label: "الصرف" },
  { id: "balagha", label: "البلاغة" },
  { id: "adab", label: "الأدب" },
  { id: "imla", label: "الإملاء" },
];

const LEVELS = [
  { id: "beginner", label: "مبتدئ" },
  { id: "intermediate", label: "متوسط" },
  { id: "advanced", label: "متقدم" },
];

const initialCourses = [
  {
    id: "c1",
    title: "أساسيات النحو للمبتدئين",
    branch: "nahw",
    level: "beginner",
    instructor: "أ. سامية الجبالي",
    color: "#1B3A5C",
    description:
      "وحدة تأسيسية تتناول المبتدأ والخبر، والفعل وأنواعه، وعلامات الإعراب الأصلية، مع أمثلة معربة من نصوص أدبية مختارة.",
    rating: 4.8,
    reviewsList: [
      { name: "هبة عادل", text: "شرح مبسط جدًا وأمثلة واضحة، استفدت كثيرًا من درس الإعراب." },
      { name: "طارق منصور", text: "الوحدة منظمة، والتمارين بعد كل درس ثبّتت المعلومة." },
    ],
    lessons: [
      { id: "l1", title: "الجملة الاسمية: المبتدأ والخبر", type: "video", duration: "١٢ دقيقة",
        content: "الجملة الاسمية تتكوّن من ركنين أساسيين: المبتدأ، وهو اسم مرفوع يقع في أول الجملة، والخبر وهو ما يكمل معنى الجملة معه.\nمثال: «الكتابُ مفيدٌ» — الكتابُ: مبتدأ مرفوع، مفيدٌ: خبر مرفوع." },
      { id: "l2", title: "الجملة الفعلية وأركانها", type: "video", duration: "١٥ دقيقة",
        content: "الجملة الفعلية تبدأ بفعل، وتتكون من فعل وفاعل، وقد يُذكر معها مفعول به أو أكثر.\nمثال: «قرأ الطالبُ الدرسَ» — قرأ: فعل ماضٍ، الطالبُ: فاعل مرفوع، الدرسَ: مفعول به منصوب." },
      { id: "l3", title: "علامات الإعراب الأصلية", type: "text", duration: "٨ دقائق",
        content: "علامات الإعراب الأصلية أربع: الضمة للرفع، والفتحة للنصب، والكسرة للجر، والسكون للجزم. تُستخدم هذه العلامات في الأسماء والأفعال المعربة التي لم تلحقها علة تصريفية." },
    ],
    quiz: {
      title: "اختبار: أساسيات النحو",
      questions: [
        { id: "q1", text: "ما إعراب كلمة «الكتاب
