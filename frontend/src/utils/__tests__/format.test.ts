import { describe, it, expect } from 'vitest';
import { formatBudget, shortLocation, formatSubmitterName } from '../format';

describe('formatBudget', () => {
  it('returns "Free entry" for 0, negative, or empty values', () => {
    expect(formatBudget(0)).toBe('Free entry');
    expect(formatBudget('')).toBe('Free entry');
    expect(formatBudget(null)).toBe('Free entry');
    expect(formatBudget(undefined)).toBe('Free entry');
    expect(formatBudget(-50)).toBe('Free entry');
  });

  it('formats positive numbers in INR currency format', () => {
    expect(formatBudget(250)).toBe('₹250 / person');
    expect(formatBudget('1500')).toBe('₹1,500 / person');
  });
});

describe('shortLocation', () => {
  it('strips plus codes and extra noise', () => {
    expect(shortLocation('JGQP+5FC, Haridevpur, Kolkata')).toBe('Haridevpur');
  });

  it('returns empty string when raw input is missing', () => {
    expect(shortLocation(null)).toBe('');
    expect(shortLocation(undefined)).toBe('');
    expect(shortLocation('')).toBe('');
  });
});

describe('formatSubmitterName', () => {
  it('extracts name from college roll number format', () => {
    expect(formatSubmitterName('kavya.25bcs10125')).toBe('kavya');
    expect(formatSubmitterName('bhavya.26bcs10191')).toBe('bhavya');
  });

  it('defaults to "community explorer" if empty', () => {
    expect(formatSubmitterName('', '')).toBe('community explorer');
    expect(formatSubmitterName(null, null)).toBe('community explorer');
  });

  it('cleans up standard names with periods or hyphens', () => {
    expect(formatSubmitterName('John.Doe')).toBe('john doe');
  });
});
