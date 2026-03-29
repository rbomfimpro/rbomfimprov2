// data.js — Dados do perfil rbomfim.pro
// Edite este arquivo para atualizar o conteúdo do site.

const PROFILE = {
  nome: "Rodrigo Bomfim",
  titulo: "Site Reliability Engineer",
  bio: "12+ anos em TI. Especialista em cloud, Kubernetes, observabilidade e DevOps. Construo sistemas confiáveis e reduzo complexidade operacional.",
  email: "rbomfim.pro@gmail.com",
  linkedin: "rbomfimpro",
  github: "rbomfimpro",

  experiencia: [
    { cargo: "SRE", empresa: "Cortex Intelligence", periodo: "08/2020 — 10/2023" },
    { cargo: "Analista de Operações", empresa: "Bemobi", periodo: "12/2018 — 08/2020" },
    { cargo: "Analista de Suporte", empresa: "Betunel", periodo: "07/2014 — 07/2018" },
  ],

  certificacoes: [
    "LPIC-1",
    "ITILv3",
  ],

  stack: {
    "CLOUD": ["EC2", "ECS", "VPC", "Route53", "IAM", "S3", "RDS", "MSK"],
    "CONTAINERS": ["Docker", "Kubernetes", "Helm", "ECS"],
    "OBSERVABILITY": ["Prometheus", "Grafana", "Datadog", "CloudWatch", "Graylog"],
    "IaC & CI/CD": ["Terraform", "Terragrunt", "Ansible", "GH Actions", "Jenkins"],
  },
};
