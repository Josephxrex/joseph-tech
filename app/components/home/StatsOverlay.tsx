import React from 'react';
import { Server, Cloud, Code, Database, Award, GitBranch } from 'lucide-react';

const JosephStats = () => {
  const stats = [
    {
      icon: <Cloud className="w-5 h-5" />,
      label: "AWS SERVICES",
      value: "10+",
      color: "hover:text-orange-400",
      bgColor: "bg-orange-500/10",
      detail: "Lambda, S3, SQS, DynamoDB"
    },
    {
      icon: <Server className="w-5 h-5" />,
      label: "SERVERLESS",
      value: "5+",
      color: "hover:text-purple-400",
      bgColor: "bg-purple-500/10",
      detail: "Implemented Projects"
    },
    {
      icon: <Database className="w-5 h-5" />,
      label: "DATABASES",
      value: "4+",
      color: "hover:text-blue-400",
      bgColor: "bg-blue-500/10",
      detail: "PostgreSQL, DynamoDB, Oracle, RDS"
    },
    {
      icon: <Award className="w-5 h-5" />,
      label: "CERTIFICATIONS",
      value: "3+",
      color: "hover:text-green-400",
      bgColor: "bg-green-500/10",
      detail: "AWS, Scrum, DevOps"
    }
  ];

  const skills = [
    { name: 'AWS', level: 'Advanced', color: 'bg-orange-500/20 hover:bg-orange-500/30' },
    { name: 'TypeScript', level: 'Advanced', color: 'bg-blue-500/20 hover:bg-blue-500/30' },
    { name: 'Serverless', level: 'Advanced', color: 'bg-purple-500/20 hover:bg-purple-500/30' },
    { name: 'Express', level: 'Advanced', color: 'bg-green-500/20 hover:bg-green-500/30' },
    { name: 'React', level: 'Intermediate', color: 'bg-cyan-500/20 hover:bg-cyan-500/30' },
    { name: 'CI/CD', level: 'Advanced', color: 'bg-red-500/20 hover:bg-red-500/30' }
  ];

  return (
    <div className="w-full bg-black/20 backdrop-blur-sm ">
      <div className="p-6 md:p-8">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-white text-xl md:text-2xl font-light">Backend & Cloud Developer</h2>
          <p className="text-gray-400 text-sm mt-2">Academic Excellence · AWS Certified</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-300 ${stat.color}`}
            >
              <div className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${stat.bgColor} group-hover:scale-105`}>
                <div className="p-2 rounded-lg">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono">{stat.label}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="text-xs text-gray-400 font-mono mb-4">CORE EXPERTISE</div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-full text-sm text-white cursor-pointer transition-colors duration-300 ${skill.color}`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Education & Achievements */}
        <div className="mt-8 p-4 bg-white/5 rounded-xl">
          <div className="text-xs text-gray-400 font-mono">LA SALLE BAJÍO UNIVERSITY</div>
          <div className="text-white text-lg mt-1">Software Engineering and Computational Systems</div>
          <div className="text-sm text-gray-400 mt-2">GPA: 3.8/4.0</div>
        </div>
      </div>
    </div>
  );
};

export default JosephStats;