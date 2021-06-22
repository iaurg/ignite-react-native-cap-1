import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.skill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  skill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
