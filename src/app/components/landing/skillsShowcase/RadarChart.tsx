'use client';

import { useState } from 'react';
import {
    SkillData,
    getSkillPolygonPoints,
    getGridPolygonPoints,
    getLabelPosition,
    getSkillPointPosition,
    polarToCartesian,
    getAngle
} from './radarChartUtils';

interface RadarChartProps {
    title: string;
    skills: SkillData[];
    color: string; // Tailwind color name: 'amber', 'teal', 'slate'
    size?: number;
    animationDelay?: number;
}

const colorMap: Record<string, { fill: string; stroke: string; text: string }> = {
    amber: {
        fill: 'rgba(180, 83, 9, 0.3)',
        stroke: 'rgb(180, 83, 9)',
        text: 'text-amber'
    },
    teal: {
        fill: 'rgba(15, 118, 110, 0.3)',
        stroke: 'rgb(15, 118, 110)',
        text: 'text-teal'
    },
    slate: {
        fill: 'rgba(71, 85, 105, 0.3)',
        stroke: 'rgb(71, 85, 105)',
        text: 'text-slate'
    }
};

export default function RadarChart({
    title,
    skills,
    color,
    size = 280,
    animationDelay = 0
}: RadarChartProps) {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const center = size / 2;
    const maxRadius = size / 2 - 50; // Leave room for labels
    const gridLevels = [0.25, 0.5, 0.75, 1]; // 25%, 50%, 75%, 100%
    const colors = colorMap[color] || colorMap.slate;

    return (
        <div
            className="flex flex-col items-center opacity-0 animate-card-fade-in"
            style={{ animationDelay: `${animationDelay}s` }}>
            {/* Chart title */}
            <h3 className={`text-lg font-semibold mb-4 ${colors.text}`}>{title}</h3>

            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="overflow-visible">
                {/* Grid polygons */}
                {gridLevels.map((level) => (
                    <polygon
                        key={level}
                        points={getGridPolygonPoints(
                            skills.length,
                            center,
                            center,
                            maxRadius * level
                        )}
                        fill="none"
                        stroke="rgba(239, 227, 194, 0.2)"
                        strokeWidth="1"
                    />
                ))}

                {/* Axis lines from center to each point */}
                {skills.map((_, index) => {
                    const angle = getAngle(index, skills.length);
                    const endpoint = polarToCartesian(center, center, maxRadius, angle);
                    return (
                        <line
                            key={index}
                            x1={center}
                            y1={center}
                            x2={endpoint.x}
                            y2={endpoint.y}
                            stroke="rgba(239, 227, 194, 0.15)"
                            strokeWidth="1"
                        />
                    );
                })}

                {/* Skill polygon - filled area */}
                <polygon
                    points={getSkillPolygonPoints(skills, center, center, maxRadius)}
                    fill={colors.fill}
                    stroke={colors.stroke}
                    strokeWidth="2"
                    className="animate-radar-fill"
                    style={{ animationDelay: `${animationDelay + 0.3}s` }}
                />

                {/* Skill points (dots) */}
                {skills.map((skill, index) => {
                    const pos = getSkillPointPosition(
                        skill,
                        index,
                        skills.length,
                        center,
                        center,
                        maxRadius
                    );
                    const isHovered = hoveredSkill === skill.name;

                    return (
                        <g key={skill.name}>
                            <circle
                                cx={pos.x}
                                cy={pos.y}
                                r={isHovered ? 8 : 5}
                                fill={colors.stroke}
                                stroke="var(--cream)"
                                strokeWidth="2"
                                className="transition-all duration-200 cursor-pointer"
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            />
                            {/* Tooltip on hover */}
                            {isHovered && (
                                <g>
                                    <rect
                                        x={pos.x - 25}
                                        y={pos.y - 35}
                                        width="50"
                                        height="24"
                                        rx="4"
                                        fill="var(--darkPine)"
                                        stroke={colors.stroke}
                                        strokeWidth="1"
                                    />
                                    <text
                                        x={pos.x}
                                        y={pos.y - 18}
                                        textAnchor="middle"
                                        fill="var(--cream)"
                                        fontSize="12"
                                        fontWeight="600">
                                        {skill.level}%
                                    </text>
                                </g>
                            )}
                        </g>
                    );
                })}

                {/* Skill labels */}
                {skills.map((skill, index) => {
                    const labelPos = getLabelPosition(
                        index,
                        skills.length,
                        center,
                        center,
                        maxRadius
                    );
                    const isHovered = hoveredSkill === skill.name;

                    return (
                        <text
                            key={skill.name}
                            x={labelPos.x}
                            y={labelPos.y}
                            textAnchor={labelPos.anchor}
                            dominantBaseline="middle"
                            fill={isHovered ? colors.stroke : 'var(--cream)'}
                            fontSize="12"
                            fontWeight={isHovered ? '600' : '400'}
                            className="transition-all duration-200 cursor-pointer"
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}>
                            {skill.name}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
}
