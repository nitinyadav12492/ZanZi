import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Droplet, Wind, Sparkles, Leaf } from 'lucide-react';

export default function BookServiceCards({ onBook }) {
  const navigate = useNavigate();

  const categories = [
    { id: 'electrical', name: 'Electrical', icon: Zap,      color: 'text-amber-500',  bg: 'bg-amber-50' },
    { id: 'plumbing',   name: 'Plumbing',   icon: Droplet,  color: 'text-blue-500',   bg: 'bg-blue-50' },
    { id: 'ac-repair',  name: 'AC Repair',  icon: Wind,     color: 'text-cyan-500',   bg: 'bg-cyan-50' },
    { id: 'cleaning',   name: 'Cleaning',   icon: Sparkles, color: 'text-purple-500', bg: 'bg-purple-50' },
    { id: 'gardening',  name: 'Gardening',  icon: Leaf,     color: 'text-green-500',  bg: 'bg-green-50' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <button
            key={cat.id}
            onClick={() => navigate(`/service/${cat.id}`)}
            className={`
              flex flex-col items-center justify-center p-6 
              bg-white border border-gray-200 rounded-xl
              hover:border-gray-300 hover:shadow-sm transition-all
            `}
          >
            <div className={`w-14 h-14 rounded-full ${cat.bg} ${cat.color} flex items-center justify-center mb-3`}>
              <Icon size={24} strokeWidth={2} />
            </div>
            
            <h3 className="font-semibold text-gray-800 text-sm">
              {cat.name}
            </h3>
          </button>
        );
      })}
    </div>
  );
}
