/**
 * Utility functions for radar chart geometry calculations
 */

export interface SkillData {
    name: string;
    level: number; // 0-100
}

/**
 * Calculate the angle for each skill point on the radar
 * Starting from top (12 o'clock) and going clockwise
 */
export function getAngle(index: number, total: number): number {
    // Start from -90 degrees (top) and go clockwise
    return (index * 360) / total - 90;
}

/**
 * Convert polar coordinates to cartesian (SVG) coordinates
 */
export function polarToCartesian(
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
): { x: number; y: number } {
    const angleInRadians = (angleInDegrees * Math.PI) / 180;
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

/**
 * Generate SVG polygon points string for skill levels
 */
export function getSkillPolygonPoints(
    skills: SkillData[],
    centerX: number,
    centerY: number,
    maxRadius: number
): string {
    return skills
        .map((skill, index) => {
            const angle = getAngle(index, skills.length);
            const radius = (skill.level / 100) * maxRadius;
            const point = polarToCartesian(centerX, centerY, radius, angle);
            return `${point.x},${point.y}`;
        })
        .join(' ');
}

/**
 * Generate SVG polygon points string for grid levels (25%, 50%, 75%, 100%)
 */
export function getGridPolygonPoints(
    numPoints: number,
    centerX: number,
    centerY: number,
    radius: number
): string {
    return Array.from({ length: numPoints })
        .map((_, index) => {
            const angle = getAngle(index, numPoints);
            const point = polarToCartesian(centerX, centerY, radius, angle);
            return `${point.x},${point.y}`;
        })
        .join(' ');
}

/**
 * Get position for skill label
 * Labels are positioned slightly outside the chart
 */
export function getLabelPosition(
    index: number,
    total: number,
    centerX: number,
    centerY: number,
    radius: number
): { x: number; y: number; anchor: string } {
    const angle = getAngle(index, total);
    const labelRadius = radius + 20; // Offset from chart edge
    const point = polarToCartesian(centerX, centerY, labelRadius, angle);

    // Determine text anchor based on position
    let anchor = 'middle';
    if (angle > -80 && angle < 80) {
        anchor = 'start'; // Right side
    } else if (angle > 100 || angle < -100) {
        anchor = 'end'; // Left side
    }

    return { x: point.x, y: point.y, anchor };
}

/**
 * Get position for skill point (dot on the polygon)
 */
export function getSkillPointPosition(
    skill: SkillData,
    index: number,
    total: number,
    centerX: number,
    centerY: number,
    maxRadius: number
): { x: number; y: number } {
    const angle = getAngle(index, total);
    const radius = (skill.level / 100) * maxRadius;
    return polarToCartesian(centerX, centerY, radius, angle);
}
