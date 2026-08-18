export const uemgSemesterCourses = [
  {
    slug: "direitos-humanos",
    title: "direitos humanos e multiculturalismo",
    summary: "vida, dignidade, preconceito, cultura e poder.",
    lessons: [
      { number: 1, date: "10/08/2026", title: "quando uma vida deixa de contar?", href: "/uemg/direitos-humanos/aulas/1/" },
      { number: 2, date: "17/08/2026", title: "quando o preconceito cede ao julgamento?", href: "/uemg/direitos-humanos/aulas/2/" },
    ],
  },
  {
    slug: "enade",
    title: "ENADE",
    summary: "leitura crítica de provas, linguagem, pressupostos e correção factual.",
    lessons: [
      { number: 1, date: "2026.2", title: "como auditar uma questão antes de respondê-la?", href: "/uemg/enade/aulas/1/" },
    ],
  },
] as const;

export const uemgSemesterConnections = [
  {
    label: "julgamento",
    from: { label: "Direitos Humanos · aula 2", href: "/uemg/direitos-humanos/aulas/2/" },
    to: { label: "ENADE · aula 1", href: "/uemg/enade/aulas/1/" },
    note: "Voltaire pede exame antes da crença; a leitura crítica aplica esse gesto ao próprio enunciado da prova.",
  },
  {
    label: "dignidade",
    from: { label: "Direitos Humanos · aula 1", href: "/uemg/direitos-humanos/aulas/1/" },
    to: { label: "ENADE · aula 1", href: "/uemg/enade/aulas/1/" },
    note: "uma política educacional também revela como descreve estudantes, ritmos e expectativas de formação.",
  },
] as const;
